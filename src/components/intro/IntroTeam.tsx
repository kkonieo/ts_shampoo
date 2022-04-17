import styled from 'styled-components';
import { useState } from 'react';
import { MemberModal } from './introTeam/MemberModal';
import { dummydata } from '../../utils/data/teamIntroData';
import { MembersList } from './introTeam/MembersList';
import { IntroTeamContent } from './introTeam/IntroTeamContent';

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
                    <IntroTeamContent />
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
