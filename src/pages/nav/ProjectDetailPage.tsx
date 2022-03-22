import { ProjectDetail } from '../../components';
import SubTitleEdit from '../../components/SubTitleEdit';
import { useState } from 'react';

const ProjectDetailPage = () => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const handleChangeToggle = () => {
        setEditMode((current) => !current);
    };
    return (
        <>
            <SubTitleEdit text={`📂 Project`} onClick={handleChangeToggle} editMode={editMode} />
            <ProjectDetail handleChangeToggle={handleChangeToggle} editMode={editMode} />
        </>
    );
};

export default ProjectDetailPage;
