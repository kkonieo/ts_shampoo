import { DetailDiv } from '../../components';
import { ProjectProps } from 'ProjectPageModule';
import SubTitle from '../../components/SubTitle';
import { useState } from 'react';
import { DetailEdit } from '..';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
    const [editToggle, setEditToggle] = useState<Boolean>(false);
    const projectId = useParams();
    const handleChangeToggle = () => {
        setEditToggle((current) => !current);
    };
    const data: ProjectProps.IProjectProps = {
        id: projectId,
        title: '프로젝트 토끼토끼',
        startDate: '2021.01.30',
        endDate: '2021.02.30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        explain:
            '엘리스 AI트랙에서 진행한 프로젝트로 사람들의 삶을 윤택하기 위해 최신 기술을 이용하여 구현했습니다. 이러한 경우에 타겟은 모든 사람입니다. 엘리스 AI트랙에서 진행한 프로젝트로 사람들의 삶을 윤택하기 위해 최신 기술을 이용하여 구현했습니다. 이러한 경우에 타겟은 모든 사람입니다. 엘리스 AI트랙에서 진행한 프로젝트로 사람들의 삶을 윤택하기 위해 최신 기술을 이용하여 구현했습니다. 이러한 경우에 타겟은 모든 사람입니다. ',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        //imgSrc:null
        urlLink: [
            {
                linkURL: 'https://youtube.com',
                linkName: 'Live Demo',
            },
            {
                linkURL: 'https://github.com',
                linkName: 'GitHub',
            },
        ],
    };
    return (
        <>
            <SubTitle text={`📂 Project`} onClick={handleChangeToggle} />
            {!editToggle && <DetailDiv {...data} />}
            {editToggle && <DetailEdit {...data} />}
        </>
    );
};

export default ProjectDetailPage;
