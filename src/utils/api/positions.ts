import axios from 'axios';
import { API_END_POINT } from '../constants/standard';

const SKILL_END_POINT = `${API_END_POINT}/job/`;

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

export const positionsApi = {
    getPositions: async () => {
        return await getApi(SKILL_END_POINT);
    },
};
