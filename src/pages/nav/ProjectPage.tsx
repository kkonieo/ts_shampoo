import { ProjectCardDiv } from '../../components/project';
import SubTitle from '../../components/SubTitle';
import { useState } from 'react';
import { ProjectEditPage } from '..';
const ProjectPage = () => {
    const [editToggle, setEditToggle] = useState<Boolean>(false);
    const handleChangeToggle = () => {
        console.log('됨');
        setEditToggle((current) => !current);
    };
    return (
        <>
            <SubTitle text="📂 Project" onClick={handleChangeToggle} />
            {!editToggle && <ProjectCardDiv></ProjectCardDiv>}
            {editToggle && <ProjectEditPage />}
        </>
    );
};

export default ProjectPage;
