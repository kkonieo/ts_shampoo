import { DetailDiv } from '../../components';
import { ProjectProps } from 'ProjectPageModule';
import SubTitle from '../../components/SubTitle';
import { useState } from 'react';
import { DetailEditPage } from '..';
const data: ProjectProps.IProjectProps = {
    id: 0,
    title: '프로젝트 토끼토끼',
    startDate: '2021.01.30',
    endDate: '2021.02.30',
    techStack: ['Django', 'Flask', 'TypeScript'],
    animatedImg: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
    staticImg: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
};
const DetailPage = () => {
    const [editToggle, setEditToggle] = useState<Boolean>(false);
    const handleChangeToggle = () => {
        console.log('됨');
        setEditToggle((current) => !current);
    };
    return (
        <>
            <SubTitle text="📂 Project" onClick={handleChangeToggle} />
            {!editToggle && <DetailDiv {...data}></DetailDiv>}
            {editToggle && <DetailEditPage />}
        </>
    );
};

export default DetailPage;
