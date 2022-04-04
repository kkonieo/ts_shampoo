import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DescribeSubPart = () => {
    return (
        <SecondSection>
            <h2>
                포트폴리오를 보고 인사 담당자가
                <br />
                쉽고 빠르게 연락할수 있어요!
            </h2>
            <div>
                <img src={`${process.env.PUBLIC_URL}/img/intro/askme.png`} alt="ask me" width={'500px'} />
                <img src={`${process.env.PUBLIC_URL}/img/intro/HRpeople.png`} alt="HR people" width={'151px'} />
                <img
                    src={`${process.env.PUBLIC_URL}/img/intro/talk.png`}
                    alt="talk"
                    width={'298px'}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                />
            </div>
            <GoServiceLink to="/">
                <h3>지금 바로 개발자들의 포트폴리오 살펴보기 </h3>
            </GoServiceLink>
        </SecondSection>
    );
};

const SecondSection = styled.div`
    padding: 300px 0;
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
        top: 200px;
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
