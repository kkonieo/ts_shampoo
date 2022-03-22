import { Members } from './Members';
import { dummydata } from '../../../utils/data/teamIntroData';
import { MembersDiv } from '../IntroTeam';

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
