import axios, { AxiosInstance } from 'axios';

// 로컬에 access_token이 존재할 경우 헤더에 넣어준다.
function getAccessToken(): void {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }
}

// axios 전역 설정 (SNS에서 토큰 가져올 때)
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

// 로그인으로 SNS 토큰 가져오기 (유저, 비유저 모두 해당됨)
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
export const userLogin = (
    access_token?: string,
    refresh_token?: string,
    expires_in?: string,
    id_token?: string,
) => axiosGetUserConfig({
    url: '/user/login',
    data: {
        access_token: access_token,
        refresh_token: refresh_token,
        expires_in: expires_in,
        id_token: id_token,
    },
})