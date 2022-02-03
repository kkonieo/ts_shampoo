import axios, { AxiosInstance } from 'axios';
import { LoginSpace, RequestTokenSpace } from 'LoginModule';
import Cookies from 'universal-cookie';

const cookies: Cookies = new Cookies();

// 로컬에 access_token이 존재할 경우 헤더에 넣어준다. => 자동으로 들어가는지 확인 필요
// function getAccessToken(): void {
//     const accessToken = cookies.get('accessToken');
//     if (accessToken) {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
//     }
// }

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
    baseURL: ``, // 기본 서버 주소 입력
    method: 'post',
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
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

// 로그인
export async function userLogin(props: RequestTokenSpace.GoogleToken) {
    try {
        const response = await axiosGetUserConfig({
            url: '/user/login',
            data: props,
        });

        const userProfile: LoginSpace.SignUpProps = {
            index: response.data.user_idx,
            userEmail: response.data.email,
            userName: response.data.name,
        };

        localStorage.setItem("userProfile", JSON.stringify(userProfile));
    }
    catch (error) {
        console.log('로그인 에러', error)
    }
}

// 회원가입
export async function registerUser(props: RequestTokenSpace.GoogleToken) {
    try {
        const response = await axiosGetUserConfig({
            url: '/user/register',
            data: props,
        });

        const userProfile: LoginSpace.SignUpProps = {
            index: response.data.user_idx,
            userEmail: response.data.email,
            userName: response.data.name,
        };

        if (!userProfile.userEmail) throw new Error('이메일이 없습니다.');
        else localStorage.setItem("userProfile", JSON.stringify(userProfile));

    }
    catch (error) {
        console.log('회원가입 에러', error)
    }
}