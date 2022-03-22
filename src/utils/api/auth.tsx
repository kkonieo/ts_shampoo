import axios, { AxiosInstance } from 'axios';
import { LoginSpace, RequestTokenSpace } from 'LoginModule';
import Cookies from 'universal-cookie';
import MockAdapter from 'axios-mock-adapter';

// request 테스트를 위한 코드
// const mock = new MockAdapter(axios); // 가짜 response 객체 생성

// mock.onPut('/user/profile').reply(200, {
//     result: true,
// });

// mock.onGet('/tag/job').reply(200, [
//     { key: '1', value: '백엔드' },
//     { key: '2', value: '프론트엔드' },
//     { key: '3', value: '풀스택' },
//     { key: '4', value: '보안' },
//     { key: '5', value: '빅데이터' },
//     { key: '6', value: '안드로이드' },
// ]);

// 쿠키 객체 생성
const cookies: Cookies = new Cookies();

// axios 전역 설정 (토큰 가져올 때)
const axiosGetTokenConfig: AxiosInstance = axios.create({
    method: 'post',
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
    },
});

// axios 전역 설정 (서버에서 유저 정보 가져올 때)
const axiosGetUserConfig: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`, // 기본 서버 주소 입력 => 아직 미정
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'Authorization': `Bearer ${cookies?.get('accessToken')}`, // 로컬에 access_token이 존재할 경우 헤더에 넣어준다. => 자동으로 들어가는지 확인 필요
    }
})

// 로그인 및 회원가입
//  “register_check”: true일 경우 기가입자 (바로 로그인 시키기) / false일 경우 가입 성공
export async function userLogin(
    props: RequestTokenSpace.GoogleToken,
) {

    const response = await axiosGetTokenConfig({
        url: `${process.env.REACT_APP_SERVER_ADDRESS}/user/register/`, // 추후에 파라미터로 url 추가 예정
        data: props,
    })

    const userProfile: LoginSpace.LoginUserProps = {
        index: response.data.user_idx,
        email: response.data.email,
        name: response.data.name,
    };

    sessionStorage.setItem("userProfile", JSON.stringify(userProfile));
    cookies.set('accessToken', response.data.tokens.access, {
        path: '/',
        expires: new Date(response.data.tokens.expired * 1000), // 테스트 기준 5분 (초 단위로 응답)
        // secure: true,
        // httpOnly: true, // 배포하면 주석 제거 필수 (보안용)
    });
    cookies.set('refreshToken', response.data.tokens.refresh, {
        path: '/',
        expires: new Date(Date.now() + (60 * 60 * 24 * 1000)), // 테스트 기준 1일
        // secure: true,
        // httpOnly: true, // 배포하면 주석 제거 필수 (보안용)
    });

    return response.data.register_check;
};

// 회원가입 (추가 정보)
export async function setSignUpProfile(data: LoginSpace.SignUpProps) {
    const response = await axiosGetUserConfig({
        method: 'patch',
        url: '/user/profile/',
        data: data
    });

    return response;
};

// 회원삭제
export async function setDeleteUser(data: LoginSpace.SignUpProps) {
    const response = await axiosGetUserConfig({
        method: 'delete',
        url: '/user/profile/',
        data: data
    });

    return response;
};

// 직군 가져오기
export async function getPosition() {
    const response = await axios.get('/job/');
    return response.data;
};