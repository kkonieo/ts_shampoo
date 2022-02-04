import styled from 'styled-components';
import { SubTitle } from '../../components';
import { MyPageSubTitle, ProfileImage } from '../../components/my-page';

const MyPage = () => {
    /*
    axios로 유저 정보들 받아옴
        프로필 사진
        아이디
        이름
        직군
        연동된 계정 정보
    */

    return (
        <Div>
            <MyPageSubTitle text="🛠 Setting" />
            <RowDiv>
                <ImageArea>
                    <ImageTitle>사진 변경하기</ImageTitle>
                    <ProfileImage />
                </ImageArea>
                <ContentsArea></ContentsArea>
            </RowDiv>
        </Div>
    );
};

export default MyPage;

const Div = styled.div`
    padding: 20px;
    box-sizing: border-box;
`;

const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const ImageArea = styled.div``;

const ImageTitle = styled.div`
    width: 150px;
    justify-self: left;
`;

const ContentsArea = styled.div``;
