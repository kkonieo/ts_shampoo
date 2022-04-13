import { ProjectDetail } from '../../components';
import SubTitleEdit from '../../components/SubTitleEdit';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetailPage = () => {
    const location = useLocation();
    console.log('플젝 디테일 로케이션', location);

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
