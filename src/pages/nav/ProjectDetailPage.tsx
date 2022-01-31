import { DetailDiv } from '../../components';
import { ProjectProps } from 'ProjectPageModule';
import SubTitleEdit from '../../components/SubTitleEdit';
import { useState } from 'react';
import { DetailEdit } from '..';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
    const [editToggle, setEditToggle] = useState<boolean>(false);
    const projectId = useParams();
    const handleChangeToggle = () => {
        setEditToggle((current) => !current);
    };

    // API로 얻은 데이터
    const data: ProjectProps.IProjectProps = {
        id: projectId?.id,
        title: '프로젝트 토끼토끼',
        startDate: '2021-01-31',
        endDate: '2021-02-28',
        techStack: ['Django', 'Flask', 'TypeScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명0',
        urlLink: [
            { linkName: 'Live Demo', linkURL: 'https://youtube.com' },
            { linkName: 'Github', linkURL: 'https://github.com' },
        ],
    };

    return (
        <>
            <SubTitleEdit text={`📂 Project`} onClick={handleChangeToggle} editMode={editToggle} />
            {!editToggle ? <DetailDiv {...data} /> : <DetailEdit {...data} handleChangeToggle={handleChangeToggle} />}
        </>
    );
};

export default ProjectDetailPage;
