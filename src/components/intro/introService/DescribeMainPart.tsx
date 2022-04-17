import styled from 'styled-components';

export const DescribeMainPart = () => {
    return (
        <FirstSection>
            <div>
                <img
                    src={`${process.env.PUBLIC_URL}/img/intro/new.png`}
                    alt="new"
                    width={'172px'}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                />
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
                    인사이트를 얻을수도 있습니다!
                </h2>
            </div>
        </FirstSection>
    );
};

const FirstSection = styled.div`
    display: flex;
    padding: 200px 0;

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
