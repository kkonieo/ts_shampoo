import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IntroService = () => {
    return (
        <>
            <section>
                <ServiceContainerDiv>
                    <h1>
                        개발자들의 포트폴리오 사이트
                        <br />
                        EliceFolio에 오신 것을 환영합니다.
                    </h1>
                    <p>자신만의 포트폴리오를 올리고 개발자로써의 역량을 보여주세요!</p>
                    <FirstSection>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/img/intro/new.png`} alt="new" width={'172px'} />
                            <img src={`${process.env.PUBLIC_URL}/img/intro/web.png`} alt="web" width={'367px'} />
                        </div>
                        <div>
                            <h2>
                                나만의 포트폴리오를 올리고
                                <br />
                                개발자로써의 역량을 보여줄수 있어요.
                            </h2>
                            <h2>
                                다른사람의 포트폴리오를 보고
                                <br />
                                인사이트를 얻을수 있습니다.
                            </h2>
                        </div>
                    </FirstSection>
                    <SecondSection>
                        <h2>
                            포트폴리오를 보고 인사 담당자가
                            <br />
                            쉽고 빠르게 연락할수 있어요!
                        </h2>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/img/intro/askme.png`} alt="ask me" width={'500px'} />
                            <img
                                src={`${process.env.PUBLIC_URL}/img/intro/HRpeople.png`}
                                alt="HR people"
                                width={'151px'}
                            />
                            <img src={`${process.env.PUBLIC_URL}/img/intro/talk.png`} alt="talk" width={'298px'} />
                        </div>
                        <GoServiceLink to="/">
                            <h3>지금 바로 개발자들의 포트폴리오 살펴보기</h3>
                        </GoServiceLink>
                    </SecondSection>
                </ServiceContainerDiv>
            </section>
        </>
    );
};

const ServiceContainerDiv = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 120px 0;

    & h1 {
        font-size: 32px;
        text-align: center;
    }
    & p {
        text-align: center;
        margin-bottom: 120px;
    }
`;
const FirstSection = styled.div`
    display: flex;
    padding: 100px 0;

    & div:first-child {
        width: 50%;
        position: relative;
        display: flex;
        justify-content: end;
    }
    & img:first-child {
        position: absolute;
        top: 0;
        right: 240px;
    }

    & div:nth-child(2) {
        padding: 80px 80px;
    }
    & h2 {
        margin-bottom: 28px;
    }
`;
const SecondSection = styled.div`
    padding: 100px 0;
    position: relative;

    & h2 {
        padding-left: 200px;
    }
    & div {
        margin-top: 115px;
        margin-left: 184px;
    }
    & img:nth-child(3) {
        position: absolute;
        top: 20px;
        right: 160px;
    }
`;
const GoServiceLink = styled(Link)`
    width: 480px;
    height: 60px;
    margin-top: 100px;
    margin-left: 184px;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 4px 10px rgb(0, 0, 0, 0.05);
    text-decoration: none;
    color: #3a3a3a;
`;
