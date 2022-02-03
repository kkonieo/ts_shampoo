import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IntroTeam = () => {
    return (
        <>
            <IntroTeamSection>
                <IntroTeamContainerDiv>
                    <h2>EliceFolio의 개발팀을 소개합니다 </h2>
                    <div>
                        <h3>만든 사람들</h3>
                        <p>
                            빛나는 미래의 인재들
                            <br />
                            EliceFolio를 함께 만든 사람들입니다.
                        </p>
                    </div>
                    <MembersDiv>
                        <div>멤버1</div>
                        <div>멤버2</div>
                        <div>멤버3</div>
                        <div>멤버4</div>
                        <div>멤버5</div>
                        <div>멤버6</div>
                        <div>멤버7</div>
                    </MembersDiv>
                </IntroTeamContainerDiv>
            </IntroTeamSection>
        </>
    );
};

const IntroTeamSection = styled.section`
    border-radius: 222px 0 0 0;
    background-color: #f5f5f5;
    text-align: center;
`;
const IntroTeamContainerDiv = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding-top: 200px;
    padding-bottom: 200px;

    & h2 {
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
const MembersDiv = styled.div`
    width: 1030px;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    & div {
        width: 235px;
        height: 235px;
        border: 1px solid;
        border-radius: 9999px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 12px 11px;
        cursor: pointer;
    }
`;
