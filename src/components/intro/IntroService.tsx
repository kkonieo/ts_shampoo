import { IntroductionPart, DescribeMainPart, DescribeSubPart } from './introService/';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const IntroService = () => {
    AOS.init();
    return (
        <>
            <section>
                <ServiceContainerDiv>
                    <IntroductionPart />
                    <DescribeMainPart />
                    <DescribeSubPart />
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
