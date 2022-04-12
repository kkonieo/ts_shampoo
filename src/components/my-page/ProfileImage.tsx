import { MyPageProps } from 'MyPageModule';
import styled from 'styled-components';

const ProfileImage = ({ imgSrc, changeImg }: MyPageProps.ProfileImgChangeProps) => {
    return (
        <Div>
            <ImageDiv>
                <ImageSrc imgSrc={imgSrc} />
            </ImageDiv>
            <ChangeImgLabel className="input_file"><input type="file" onClick={changeImg} accept=".jpg, .jpeg, .png" />사진 변경</ChangeImgLabel>

        </Div>
    );
};

export default ProfileImage;

const Div = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const ChangeImgLabel = styled.label`
    margin-top: 30px;
    border-radius: 3px;

    input {
        display: none;
    }
`;