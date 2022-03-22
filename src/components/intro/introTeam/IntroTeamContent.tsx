import styled from 'styled-components';

export const IntroTeamContent = () => {
    return (
        <IntroTeamText>
            <h2>EliceFolio의 개발팀을 소개합니다 </h2>
            <div>
                <h3>만든 사람들</h3>
                <p>
                    빛나는 미래의 인재들
                    <br />
                    EliceFolio를 함께 만든 사람들입니다.
                </p>
            </div>
        </IntroTeamText>
    );
};

const IntroTeamText = styled.div`
    h2 {
        font-size: 32px;
        margin-bottom: 160px;
    }

    & div:nth-child(2) {
        & h3 {
            font-size: 28px;
            margin-bottom: 12px;
        }
        & p {
            font-size: 20px;
        }
    }
`;
