import axios, { AxiosInstance, AxiosError } from 'axios';
import { LoginSpace, RequestTokenSpace } from 'LoginModule';
import { UserSpace } from 'InformationModule';
import Cookies from 'universal-cookie';
import MockAdapter from 'axios-mock-adapter';

// 쿠키 객체 생성
const cookies: Cookies = new Cookies();

// axios 전역 설정 (기본)
const axiosConfig: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`
});

// axios 인터셉터 생성
axiosConfig.interceptors.response.use(
    async config => {
        return config;
    },
    (error: AxiosError) => {
        if (error?.response?.status === 401) {
            return tokenRefresh(error);
        }
        
        return Promise.reject(error);
    },
);

// // request 테스트를 위한 코드
// const mock = new MockAdapter(axiosConfig); // 가짜 response 객체 생성
// mock.onGet('/job/').reply(200, [...jobList]);

// refresh 재발급 함수
const tokenRefresh = async (error: AxiosError) => {
    const refreshToken: string = cookies.get('refreshToken');

        // 리프레쉬 토큰이 없으면
        if (!refreshToken) {
            sessionStorage.clear();
            window.location.href = '/login';
        }

    const response = await axiosConfig({
        method: 'post',
        url: '/user/refresh/',
        data: {
            refresh: cookies.get('refreshToken')
        },
    });

    cookies.set('accessToken', response.data.access, {
        path: '/',
        expires: new Date(Date.now() + (1000 * 60 * 5)), // 테스트 기준 5분 (초 단위로 응답)
        // secure: true,
        // httpOnly: true, // 배포하면 주석 제거 필수 (보안용)
    });

    if (error?.config?.headers) {
        error.config.headers.Authorization = `Bearer ${response.data.access}`;
    }

    return axiosConfig(error.config);
}

// axios 모듈 생산하는 함수
export const api = (withToken: boolean) => {
    const headers: any = {
        'Content-Type': "application/json",
        'Accept': "application/json",
    };

    // token이 필요한 api이면 headers에 Authorization 추가
    if (withToken) {
        headers.Authorization = `Bearer ${cookies.get('accessToken')}`;
    };

    return {
        // 로그인 및 회원가입
        userLogin: async (props: RequestTokenSpace.GoogleToken): Promise<string> => {
        
            const response = await axiosConfig({
                method: 'post',
                url: "/user/register/", // 추후에 파라미터로 url 추가 예정
                data: props,
                headers,
            })
        
            const userProfile: LoginSpace.LoginUserProps = {
                id: response.data.user_id,
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
        },

        // 회원가입 (추가 정보)
        setSignUpProfile: async (data: LoginSpace.SignUpProps): Promise<any> => {
            const response = await axiosConfig({
                method: 'patch',
                url: '/user/profile/',
                data: data,
                headers,
            });

            return response;
        },

        // 회원탈퇴
        setDeleteUser: async (): Promise<string> => {
            const response = await axiosConfig({
                method: 'delete',
                url: '/user/delete/',
                headers,
            });

            return response.data;
        },

        // 직군 가져오기
        getPosition: async (): Promise<UserSpace.Job[]> => {
            const response = await axiosConfig({
                method: 'get',
                url: '/job/',
                headers,
            });

            return response.data;
        },

        // Contact 페이지 정보 불러오기
        getContact: async (id: string) => {
            const response = await axiosConfig({
                method: 'get',
                url: `/gmail/${id}`,
                headers,
            });

            console.log('response', response);

            return response.data;
        },

        // Settings 페이지 정보 불러오기
        getSettings: async () => {
            const response = await axiosConfig({
                method: 'get',
                url: `/user/info/`,
                headers,
            });

            return response;
        },
    }
}