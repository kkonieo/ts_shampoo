import axios, { AxiosInstance } from 'axios';
import { LoginSpace } from 'LoginModule';

// 로컬에 access_token이 존재할 경우 헤더에 넣어준다.
function getAccessToken(): void {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }
}

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

// 로그인 (구글 기준으로 적용)
export async function userLogin(props: LoginSpace.LoginToken) {
    try {
        const response = await axiosGetUserConfig({
            url: '/user/login',
            data: props,
        });
        return response;
    }
    catch (error) {
        console.log('로그인 에러', error)
    }
}

// 회원가입
export async function registerUser(props: LoginSpace.LoginToken) {
    try {
        const response = await axiosGetUserConfig({
            url: '/user/register',
            data: props,
        });

        const userProfile: LoginSpace.SignUpProps = {
            index: response.data.user_idx,
            email: response.data.email,
            name: response.data.name,
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
        };

        localStorage.setItem("userProfile", JSON.stringify(userProfile));
    }
    catch (error) {
        console.log('회원가입 에러', error)
    }
}