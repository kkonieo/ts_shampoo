import { DetailDiv } from '../../components';
import { IProjectProps } from '../../components/project/ProjectCard';
const data: IProjectProps = {
    id: 0,
    title: '프로젝트 토끼토끼',
    startDate: '2021.01.30',
    endDate: '2021.02.30',
    techStack: ['Django', 'Flask', 'TypeScript'],
    animatedImg: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
    staticImg: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
};
const DetailPage = () => {
    return <DetailDiv {...data}></DetailDiv>;
};

export default DetailPage;
