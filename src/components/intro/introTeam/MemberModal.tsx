import styled from 'styled-components';
import { TeamIntroProps } from 'TeamIntroModule';

export const MemberModal = ({
    handleModal,
    data,
}: {
    handleModal: React.MouseEventHandler<HTMLButtonElement>;
    data: TeamIntroProps.MemberDataProps;
}) => {
    return (
        <Background>
            <ModalContainer>
                <CloseIcon onClick={handleModal}>
                    <img src={`${process.env.PUBLIC_URL}/img/close.svg`} alt="close" />
                </CloseIcon>
                <MemberInfoBox>
                    <div className="leftSide">
                        <div className="image">
                            <img src={data.img} alt="member" />
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="name bold">{data.name}</div>
                        <div className="github">
                            <span className="bold">github</span> <a href={data.github}> github</a>
                        </div>
                        <div className="portfolio">
                            <span className="bold">portfolio</span> <a href={data.portfolio}> portfolio</a>
                        </div>
                    </div>
                </MemberInfoBox>
                <MemberCommentBox>
                    <p className="bold">comment</p>
                    <p className="comment">{data.introduction}</p>
                </MemberCommentBox>
            </ModalContainer>
        </Background>
    );
};

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
`;
const ModalContainer = styled.div`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background-color: #fff;
    .bold {
        font-weight: bold;
    }
`;
const CloseIcon = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    padding: 4px;
    margin: 12px;
    img {
        width: 20px;
        height: 20px;
    }
`;
const MemberInfoBox = styled.div`
    display: flex;
    .rightSide,
    .leftSide {
        margin-left: 20px;
        margin-top: 28px;
    }
    .image {
        width: 200px;
        height: 300px;
        border: 1px solid #f5f5f5;
    }
    .name {
        font-size: 20px;
        margin-bottom: 12px;
        margin-top: 12px;
    }
`;

const MemberCommentBox = styled.div`
    padding: 20px;
    margin-top: 8px;
    .comment {
        margin-top: 8px;
        line-height: 1.3;
    }
`;
