import { ProjectDetail } from '../../components';
import SubTitleEdit from '../../components/SubTitleEdit';
import { useState } from 'react';

const ProjectDetailPage = () => {
    const [editToggle, setEditToggle] = useState<boolean>(false);
    const handleChangeToggle = () => {
        setEditToggle((current) => !current);
    };
    return (
        <>
            <SubTitleEdit text={`📂 Project`} onClick={handleChangeToggle} editMode={editToggle} section="project" />
            <ProjectDetail handleChangeToggle={handleChangeToggle} editMode={editToggle} />
        </>
    );
};

export default ProjectDetailPage;
