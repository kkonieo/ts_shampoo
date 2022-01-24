import ProjectCard, { IProjectProps } from './ProjectCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const datas: IProjectProps[] = [
    {
        id: 0,
        title: '프로젝트 토끼토끼',
        startDate: '2021.01.30',
        endDate: '2021.02.30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        animatedImg: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        staticImg: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
    },
    {
        id: 2,
        title: '프로젝트 토끼토끼',
        startDate: '2021.01.30',
        endDate: '2021.02.30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        animatedImg: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        staticImg: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
    },
    {
        id: 3,
        title: '프로젝트 토끼토끼',
        startDate: '2021.01.30',
        endDate: '2021.02.30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        animatedImg: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        staticImg: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
    },
    {
        id: 4,
        title: '프로젝트 토끼토끼',
        startDate: '2021.01.30',
        endDate: '2021.02.30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        animatedImg: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        staticImg: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
    },
    {
        id: 5,
        title: '프로젝트 토끼토끼',
        startDate: '2021.01.30',
        endDate: '2021.02.30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        animatedImg: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        staticImg: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
    },
];

const ProjectCardDiv = () => {
    return (
        <GridDiv>
            {datas.map((data, idx) => (
                <Link to={`../detail/${data.id}`}>
                    <ProjectCard key={data.title + idx} {...data} />
                </Link>
            ))}
        </GridDiv>
    );
};

export default ProjectCardDiv;

const GridDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.5%;
    margin: 2.5%;
    a {
        text-decoration: none;
    }
`;
