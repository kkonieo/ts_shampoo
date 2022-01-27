import { DetailDiv } from '../../components';
import { ProjectProps } from 'ProjectPageModule';
import SubTitle from '../../components/SubTitle';
import { useState } from 'react';
import { DetailEditPage } from '..';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
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
        explain: '프로젝트 설명',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        //imgSrc:null
    };
    return (
        <>
            <SubTitle text={`📂 ${data.title}`} onClick={handleChangeToggle} />
            {!editToggle && <DetailDiv {...data}></DetailDiv>}
            {editToggle && (
                <>
                    <form>
                        제작 시작일: <input type="text" />
                        제작 종료일: <input type="text" />
                    </form>
                    <DetailEditPage />
                </>
            )}
        </>
    );
};

export default DetailPage;
