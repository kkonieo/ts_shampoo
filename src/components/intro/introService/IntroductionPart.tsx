import styled from 'styled-components';

export const IntroductionPart = () => {
    return (
        <IntroductionDiv data-aos="fade-up" data-aos-duration="2000">
            <h1>
                개발자들의 포트폴리오 사이트
                <br />
                EliceFolio에 오신 것을 환영합니다.
            </h1>
            <p>자신만의 포트폴리오를 올리고 개발자로써의 역량을 보여주세요!</p>
        </IntroductionDiv>
    );
};

const IntroductionDiv = styled.div`
    padding: 200px 0;
`;
