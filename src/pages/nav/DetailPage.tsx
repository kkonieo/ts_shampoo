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
    gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
    explain: '프로젝트 설명',
};
const DetailPage = () => {
    const [editToggle, setEditToggle] = useState<Boolean>(false);
    const handleChangeToggle = () => {
        setEditToggle((current) => !current);
    };
    return (
        <>
            <SubTitle text={`📂 ${data.title}`} onClick={handleChangeToggle} />
            {!editToggle && <DetailDiv {...data}></DetailDiv>}
            {editToggle && <DetailEditPage />}
        </>
    );
};

export default DetailPage;
