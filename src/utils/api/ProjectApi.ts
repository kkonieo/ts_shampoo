import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { ProjectDetail } from '../../components';
import type * as Api from './common';

interface requestApiOptions {
    readonly project: AxiosInstance;
    readonly getProject: (author: string) => AxiosPromise<Api.ProjectDetail[]>;
    readonly getProjectDetail: (author: string, id: number) => AxiosPromise<Api.ProjectDetail>;
    putProjectDetail: (author: string, projectDetail: Api.ProjectDetail) => AxiosPromise<Api.ProjectDetail>;
    postProjectDetail: (author: string, projectDetail: Api.ProjectDetail) => AxiosPromise<Api.ProjectDetail>;
}

export const ProjectApi = (): requestApiOptions => {
    const project = axios.create({
        baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}/project`,
    });
    return {
        project,
        getProject: (author) => project.get(`/${author}/`),
        getProjectDetail: (author, id) => project.get(`/${author}/${id}`),
        putProjectDetail: (author, projectDetail) =>
            project.put(`/${author}/`, {
                urlLink: projectDetail.urlLink,
                title: projectDetail.title,
                startDate: projectDetail.startDate,
                endDate: projectDetail.endDate,
                techStack: projectDetail.techStack,
                imgSrc: projectDetail.imgSrc,
                gifSrc: projectDetail.gifSrc,
                author_id: author,
            }),
        postProjectDetail: (author, projectDetail) =>
            project.post(`/${author}/`, {
                urlLink: projectDetail.urlLink,
                title: projectDetail.title,
                startDate: projectDetail.startDate,
                endDate: projectDetail.endDate,
                techStack: projectDetail.techStack,
                imgSrc: projectDetail.imgSrc,
                gifSrc: projectDetail.gifSrc,
                author_id: author,
            }),
    };
};
