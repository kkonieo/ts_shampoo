import { ProjectAdd, SubTitleEdit } from '../../components';

const ProjectAddPage = () => {
    // 초기 데이터 및 POST로 전달할 데이터
    return (
        <>
            <SubTitleEdit text={`📂 Project`} editMode={true} />
            <ProjectAdd />
        </>
    );
};

export default ProjectAddPage;
