import axios, { AxiosInstance } from 'axios';
import { LoginSpace, RequestTokenSpace } from 'LoginModule';
import Cookies from 'universal-cookie';
import MockAdapter from 'axios-mock-adapter';
import {jobList} from './job';

// request 테스트를 위한 코드
// const mock = new MockAdapter(axios); // 가짜 response 객체 생성

// mock.onGet('/tag/job').reply(200, [
//     { key: '1', value: '백엔드' },
//     { key: '2', value: '프론트엔드' },
//     { key: '3', value: '풀스택' },
//     { key: '4', value: '보안' },
//     { key: '5', value: '빅데이터' },
//     { key: '6', value: '안드로이드' },
// ]);

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

// axios 모듈 생산하는 함수
export const api = (withToken: boolean) => {
    const headers: Headers = {
        'Content-Type': "application/json",
        'Accept': "application/json",
    };

    if (withToken) {
        headers.Authorization = `Bearer ${cookies.get('accessToken')}`
    }

    return {
        // 로그인 및 회원가입
        userLogin: async (props: RequestTokenSpace.GoogleToken) => {
        
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
        setSignUpProfile: async (data: LoginSpace.SignUpProps) => {
            const response = await axiosConfig({
                method: 'patch',
                url: '/user/profile/',
                data: data
            });

            return response;
        },

        // 회원삭제
        setDeleteUser: async (data: LoginSpace.SignUpProps) => {
            const response = await axiosConfig({
                method: 'delete',
                url: '/user/profile/',
                data: data
            });

            return response;
        },

        // 직군 가져오기
        getPosition: async () => {
            const response = await axiosConfig({
                method: 'get',
                url: '/job/'
            });

            return response.data;
        }
            }
}