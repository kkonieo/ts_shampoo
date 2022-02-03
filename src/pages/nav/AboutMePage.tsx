import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Summary, Skills, EditDetect } from '../../components';
import { Resume } from '../../components/about-me';
import { aboutMeEditState } from '../../utils/data/atom';

const AboutMePage = () => {
    //유저의 간단한 자기 소개

    //TODO : axios를 통해 서버에서 해당 유저의 summary , skills , resume 받아오고 컴포넌트로 뿌려줄 예정
    /*
        수정 모드임을 감지할수 있도록 설정
        수정 로직 각 컴포넌트에서 수정 클릭시 확인 버튼, input 창에 해당 데이터가 떠야함
    */

    const controlEditMode = useRecoilValue(aboutMeEditState);

    const summaryEditMode = controlEditMode[0].editMode;
    const skillsEditMode = controlEditMode[1].editMode;
    const resumeEditMode = controlEditMode[2].editMode;

    const tmpContents = [
        '안녕하세요!',
        '프론트엔드 개발자를 꿈꾸는 엘리스입니다!',
        '저의 장점은 이러이러한게 있고 저러저러한게 있습니다!',
        '여기는 자기소개 페이지가 되어서 이런 저런 말을 씁니다!',
        '저는 아주 뽑고싶은 인재입니다!',
    ];

    return (
        <Div>
            {(summaryEditMode || skillsEditMode || resumeEditMode) && <EditDetect />}
            <Summary contents={tmpContents} isEditMode={summaryEditMode} />
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
