import styled from 'styled-components';
import { useState } from 'react';
import { MemberModal } from './introTeam/MemberModal';
import { dummydata } from '../../utils/data/teamIntroData';
import { MembersList } from './introTeam/MembersList';

export const IntroTeam = () => {
    const [modal, setModal] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);

    const handleModal = ({ index }: { index: number }) => {
        setModal((modal) => !modal);
        setClickedIndex(index);
    };

    return (
        <>
            {modal && (
                <MemberModal
                    handleModal={() => {
                        handleModal({ index: clickedIndex });
                    }}
                    data={dummydata[clickedIndex]}
                />
            )}
            <IntroTeamSection>
                <IntroTeamContainerDiv>
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
                    <MembersList handleModal={handleModal} />
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
`;
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
export const MembersDiv = styled.div`
    width: 1030px;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
