import axios from 'axios';
import { API_END_POINT } from '../constants/standard';

const SUMMARY_END_POINT = `${API_END_POINT}/profile/`;
const SKILL_END_POINT = `${API_END_POINT}/skill/`;

const getApi = async (url: string) => {
    const result = await axios.get(url);
    const notFoundObj = { status: 404, message: '데이터를 찾을수 없습니다.', data: [] };
    const internalErrObj = { status: 500, message: '네트워크 에러.', data: [] };
    switch (result.status) {
        case 200:
            return result;
        case 404:
            return notFoundObj;
        case 500:
            return internalErrObj;
        default:
            return internalErrObj;
    }
};

const postApi = async (url: string, data?: object, headers?: any) => {
    const result = await axios.post(url, data, headers);
    const wrongReqObj = { status: 400, message: '잘못된 접근입니다.', data: [] };
    const notValidObj = { status: 401, message: '권한이 없습니다.', data: [] };
    const notFoundObj = { status: 404, message: '데이터를 찾을수 없습니다.', data: [] };
    const internalErrObj = { status: 500, message: '네트워크 에러.', data: [] };
    switch (result.status) {
        case 200:
            return result;
        case 201:
            return result;
        case 400:
            return wrongReqObj;
        case 401:
            return notValidObj;
        case 404:
            return notFoundObj;
        case 500:
            return internalErrObj;
        default:
            return internalErrObj;
    }
};

const putApi = async (url: string, data?: object, headers?: any) => {
    const result = await axios.put(url, data, headers);
    const wrongReqObj = { status: 400, message: '잘못된 접근입니다.', data: [] };
    const notValidObj = { status: 401, message: '권한이 없습니다.', data: [] };
    const notFoundObj = { status: 404, message: '데이터를 찾을수 없습니다.', data: [] };
    const internalErrObj = { status: 500, message: '네트워크 에러.', data: [] };
    switch (result.status) {
        case 200:
            return result;
        case 400:
            return wrongReqObj;
        case 401:
            return notValidObj;
        case 404:
            return notFoundObj;
        case 500:
            return internalErrObj;
        default:
            return internalErrObj;
    }
};

export const summaryApi = {
    getUserSummary: async (slug: string) => {
        return await getApi(`${SUMMARY_END_POINT}${slug}`);
    },
    createUserSummary: async (data: string, accessToken: string) => {
        return await postApi(
            `${SUMMARY_END_POINT}`,
            { content: data },
            { headers: { Authorization: `Bearer ${accessToken}` } },
        );
    },
    editUserSummary: async (data: string, accessToken: string) => {
        return await putApi(
            `${SUMMARY_END_POINT}`,
            { content: data },
            { headers: { Authorization: `Bearer ${accessToken}` } },
        );
    },
};

export const skillApi = {
    getAllSkills: async () => {
        return await getApi(SKILL_END_POINT);
    },
    getUserSkills: async (slug: string) => {
        return await getApi(`${SKILL_END_POINT}${slug}`);
    },
};
