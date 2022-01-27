import styled from 'styled-components';
import { Summary, Skills } from '../../components';
import { Resume, SkillsTest } from '../../components/about-me';

const AboutMePage = () => {
    //유저의 간단한 자기 소개
    //TODO : 배열 방식으로 처리할지 다른 방법으로 처리할지 고민
    const tmpContents = [
        '안녕하세요!',
        '프론트엔드 개발자를 꿈꾸는 엘리스입니다!',
        '저의 장점은 이러이러한게 있고 저러저러한게 있습니다!',
        '여기는 자기소개 페이지가 되어서 이런 저런 말을 씁니다!',
        '저는 아주 뽑고싶은 인재입니다!',
    ];

    return (
        <Div>
            <Summary contents={tmpContents} />
            <SkillsTest />
            <Resume />
        </Div>
    );
};

export default AboutMePage;

const Div = styled.div`
    padding: 20px;
    box-sizing: border-box;
`;
