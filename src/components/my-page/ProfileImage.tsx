import { MyPageProps } from 'MyPageModule';
import styled from 'styled-components';

const ProfileImage = ({ imgSrc }: MyPageProps.ProfileImgProps) => {
    return (
        <Div>
            <ImageDiv>
                <ImageSrc imgSrc={imgSrc} />
            </ImageDiv>
            <BtnContainer>
                <ChangeImgBtn>사진 변경</ChangeImgBtn>
            </BtnContainer>
        </Div>
    );
};

export default ProfileImage;

const Div = styled.div`
    margin-left: 2vw;
`;

const ImageDiv = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: gray;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const ImageSrc = styled.img.attrs(({imgSrc}: MyPageProps.ProfileImgProps) => ({
    src: imgSrc || `${process.env.PUBLIC_URL}/img/userDefault.png`,
    alt: '사용자 이미지'
}))<MyPageProps.ProfileImgProps>`
    width: ${imgSrc => imgSrc ? '100%' : '60%'};
    height: ${imgSrc => imgSrc ? '100%' : '60%'};
    border-radius: ${imgSrc => imgSrc ? '100px' : ''};
    z-index: 1;
`;

const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ChangeImgBtn = styled.button`
    margin-top: 30px;
    justify-self: center;
    align-self: center;
    border-radius: 3px;
    background-color: ${(props) => props.theme.color.buttonColor};
    &:hover {
        background-color: ${(props) => props.theme.color.buttonHoverColor};
    }
`;
