import { MyPageProps } from 'MyPageModule';
import styled from 'styled-components';

const ProfileImage = ({ imgSrc }: MyPageProps.ProfileImgProps) => {
    return (
        <Div>
            <ImageDiv>
                <ImageSrc />
            </ImageDiv>
            <BtnContainer>
                <ChangeImgBtn>사진 변경</ChangeImgBtn>
            </BtnContainer>
        </Div>
    );
};

export default ProfileImage;

const Div = styled.div``;

const ImageDiv = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    box-sizing: border-box;
    background-color: gray;
    padding: 20px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const ImageSrc = styled.img.attrs((props: MyPageProps.ProfileImgProps) => ({
    src: props.imgSrc || `${process.env.PUBLIC_URL}/img/userDefault.png`,
}))`
    width: 80%;
    height: 80%;
    z-index: 1;
    alt: '사용자 이미지';
`;

const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ChangeImgBtn = styled.button`
    width: 80px;
    height: 30px;
    margin-top: 30px;
    justify-self: center;
    align-self: center;
    border-radius: 3px;
    background-color: ${(props) => props.theme.color.buttonColor};
    &:hover {
        background-color: ${(props) => props.theme.color.buttonHoverColor};
    }
`;
