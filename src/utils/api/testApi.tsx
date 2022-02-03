import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { config } from 'process';

const mock = new MockAdapter(axios, { delayResponse: 1000 });

const mockResponse = [
    ['POST', '/user/register/google', 200, {
        data: {
            user_idx: "1",
            email: "example@gmail.com",
            name: "김메롱",
            access_token: "sdhuweifh21uk378248efhfsjdf",
            refresh_token: "adlkasmcm91923uhgjd9si8ufh9d2",
            expires_in: String(Date.now() / 1000),
            register_check: false,
        }
    }],
    ['PUT', '/user/profile', 200, {
        data: true,
    }],
    ['GET', '/tag/job', 200, {
        data: [
            { key: '1', value: '백엔드' },
            { key: '2', value: '프론트엔드' },
            { key: '3', value: '풀스택' },
            { key: '4', value: '보안' },
            { key: '5', value: '빅데이터' },
            { key: '6', value: '안드로이드' },
        ]
    }],
];

mock.onAny().reply(config => {
    const [method, url, ...response] = mockResponse.shift() || [];

    if (config.url === url && config.method?.toUpperCase() === method)
        return response;

    return [500, {}];
});