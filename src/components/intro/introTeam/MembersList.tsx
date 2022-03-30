import styled from 'styled-components';
import { Members } from './Members';
import { dummydata } from '../../../utils/data/teamIntroData';

export const MembersList = ({ handleModal }: { handleModal: ({ index }: { index: number }) => void }) => {
    return (
        <MembersDiv>
            {dummydata.map((item, index) => {
                return (
                    <>
                        <div
                            key={'members' + index}
                            onClick={() => {
                                handleModal({ index: index });
                            }}
                        >
                            <Members text={item.name} image={item.img} />
                        </div>
                    </>
                );
            })}
        </MembersDiv>
    );
};

const MembersDiv = styled.div`
    width: 1030px;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
