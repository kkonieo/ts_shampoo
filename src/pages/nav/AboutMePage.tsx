import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Summary, Skills, EditDetect } from '../../components';
import { Resume } from '../../components/about-me';
import { aboutMeData, aboutMeEditState } from '../../utils/data/atom';

const AboutMePage = () => {
    //유저의 간단한 자기 소개

    //TODO : axios를 통해 서버에서 해당 유저의 summary , skills , resume 받아오고 컴포넌트로 뿌려줄 예정
    /*
        수정 모드임을 감지할수 있도록 설정
        수정 로직 각 컴포넌트에서 수정 클릭시 확인 버튼, input 창에 해당 데이터가 떠야함
    */

    const controlEditMode = useRecoilValue(aboutMeEditState);
    const summaryData = useRecoilValue(aboutMeData);

    const summaryEditMode = controlEditMode[0].editMode;
    const skillsEditMode = controlEditMode[1].editMode;
    const resumeEditMode = controlEditMode[2].editMode;

    return (
        <Div>
            {(summaryEditMode || skillsEditMode || resumeEditMode) && <EditDetect />}
            <Summary isEditMode={summaryEditMode} />
            <Skills isEditMode={skillsEditMode} />
            <Resume isEditMode={resumeEditMode} />
        </Div>
    );
};

export default AboutMePage;

const Div = styled.div`
    padding: 20px;
    box-sizing: border-box;
`;
