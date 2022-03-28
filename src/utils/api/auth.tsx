import axios, { AxiosInstance } from 'axios';
import { LoginSpace, RequestTokenSpace } from 'LoginModule';
import { UserSpace } from 'InformationModule';
import Cookies from 'universal-cookie';
import MockAdapter from 'axios-mock-adapter';

// headers 인터페이스
interface Headers {
    'Content-Type': "application/json",
    'Accept': "application/json",
    Authorization?: string,
};

// 쿠키 객체 생성
const cookies: Cookies = new Cookies();

// axios 전역 설정 (기본)
const axiosConfig: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`
});

// // request 테스트를 위한 코드
// const mock = new MockAdapter(axiosConfig); // 가짜 response 객체 생성
// mock.onGet('/job/').reply(200, [...jobList]);

// refresh 재발급 함수
const getTokenRefresh = async (): Promise<void> => {
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
}

// axios 모듈 생산하는 함수
export const api = (withToken: boolean) => {
    const headers: Headers = {
        'Content-Type': "application/json",
        'Accept': "application/json",
    };

    if (withToken) {
        const accessToken: string = cookies.get('accessToken');
        const refreshToken: string = cookies.get('refreshToken');

        // 리프레쉬 토큰이 없으면
        if (!refreshToken) {
            sessionStorage.clear();
        // 리프레쉬 토큰이 있으면
        } else {
            // 엑세스 토큰이 있으면
            if (accessToken) {
                headers.Authorization = `Bearer ${accessToken}`
            // 액세스 토큰이 없으면
            } else {
                getTokenRefresh();
            }
        }
    }

    return {
        // 로그인 및 회원가입
        userLogin: async (props: RequestTokenSpace.GoogleToken): Promise<string> => {
        
            const response = await axiosConfig({
                method: 'post',
                url: "/user/register/", // 추후에 파라미터로 url 추가 예정
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
        },

        // 회원가입 (추가 정보)
        setSignUpProfile: async (data: LoginSpace.SignUpProps): Promise<any> => {
            const response = await axiosConfig({
                method: 'patch',
                url: '/user/profile/',
                data: data
            });

            return response;
        },

        // 회원탈퇴
        setDeleteUser: async (): Promise<void> => {
            await axiosConfig({
                method: 'delete',
                url: '/user/delete/',
            });
        },

        // 직군 가져오기
        getPosition: async (): Promise<UserSpace.Job[]> => {
            const response = await axiosConfig({
                method: 'get',
                url: '/job/'
            });

            return response.data;
        },
    }
}