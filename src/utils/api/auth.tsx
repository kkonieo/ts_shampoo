import axios, { AxiosInstance } from 'axios';
import { LoginSpace, RequestTokenSpace } from 'LoginModule';
import Cookies from 'universal-cookie';

const cookies: Cookies = new Cookies();

// axios 전역 설정 (SNS에서 토큰 가져올 때)
// 네이버가 data를 지원하지 않아서 params로 적용
export const axiosGetTokenConfig: AxiosInstance = axios.create({
    method: 'post',
    params: {
        code: new URL(window.location.href).searchParams.get('code'),
        grant_type: 'authorization_code',
        state: 'test',
    },
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
    }
})

// axios 전역 설정 (서버에서 유저 정보 가져올 때)
export const axiosGetUserConfig: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`, // 기본 서버 주소 입력
    method: 'post',
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'Authorization': `Bearer ${cookies.get('accessToken')}`, // 로컬에 access_token이 존재할 경우 헤더에 넣어준다. => 자동으로 들어가는지 확인 필요
    }
})

// SNS 토큰 가져오기 (유저, 비유저 모두 해당됨)
export const getSnsLoginToken = (
    tokenResponseUri: string,
    clientId: string,
    clientSecretKey: string,
) => axiosGetTokenConfig({
    url: tokenResponseUri,
    params: {
        client_id: clientId,
        client_secret: clientSecretKey,
    },
})

// 로그인 및 회원가입
//  “register_check”: true일 경우 기가입자 (바로 로그인 시키기) / false일 경우 가입 성공
export async function userLogin(
    url: string,
    props: RequestTokenSpace.GoogleToken | RequestTokenSpace.NaverToken | RequestTokenSpace.GithubToken) {
    try {
        const response = await axiosGetUserConfig({
            url: `/user/register/${url}`,
            data: props,
        });

        const userProfile: LoginSpace.LoginUserProps = {
            index: response.data.user_idx,
            userEmail: response.data.email,
            userName: response.data.name,
        };

        localStorage.setItem("userProfile", JSON.stringify(userProfile));
        cookies.set('accessToken', response.data.access_token, {
            path: '/',
            expires: new Date(Number(response.data.expires_in)), // 테스트 기준 5분
        });
        cookies.set('refreshToken', response.data.refresh_token, {
            path: '/',
            expires: new Date(Date.now() + (60 * 60 * 24 * 1000)), // 테스트 기준 1일
        });

        // 가입되지 않은 유저라면
        if (response.data.register_check === "false") {
            return '/signup';
        }
        // 가입된 유저라면
        else {
            alert('이미 가입한 유저입니다.');
            return '/home';
        }
    }
    catch (error) {
        console.log('로그인 에러', error)
    }
}