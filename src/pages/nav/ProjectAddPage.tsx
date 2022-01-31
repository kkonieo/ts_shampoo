import { DetailDiv } from '../../components';
import { ProjectProps } from 'ProjectPageModule';
import SubTitleEdit from '../../components/SubTitleEdit';
import { useState } from 'react';
import { DetailEdit } from '..';

const ProjectAddPage = () => {
    const [editToggle, setEditToggle] = useState<boolean>(false);
    const handleChangeToggle = () => {
        setEditToggle((current) => !current);
    };

    // API로 얻은 데이터
    const data: ProjectProps.IProjectProps = {
        title: '',
        startDate: '',
        endDate: '',
        techStack: [],
        imgSrc: '',
        gifSrc: '',
        explain: '',
        urlLink: [],
    };

    return (
        <>
            <SubTitleEdit text={`📂 Project`} onClick={handleChangeToggle} editMode={editToggle} />
            {!editToggle ? <DetailDiv {...data} /> : <DetailEdit {...data} handleChangeToggle={handleChangeToggle} />}
        </>
    );
};

export default ProjectAddPage;
