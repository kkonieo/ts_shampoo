import { MyPageProps } from 'MyPageModule';
import styled from 'styled-components';
import { SubTitle } from '../../components';
import { MyPageSubTitle, ProfileImage } from '../../components/my-page';
import UserInfoBox from '../../components/my-page/UserInfoBox';

const MyPage = () => {
    /*
    axios로 유저 정보들 받아옴
        프로필 사진
        아이디
        이름
        직군
        연동된 계정 정보
    */

    const userData: MyPageProps.MyPageProps = {
        id: 'elice@test.com',
        userName: '엘리스',
        userJobGroup: { id: 'front-end', value: '프론트엔드' },
        account: { social: 'github', socialId: '토끼토끼' },
    };

    const tmpJobGroup = [
        { id: 'front-end', value: '프론트엔드' },
        { id: 'back-end', value: '백엔드' },
        { id: 'AI', value: '인공지능' },
        { id: 'data-analyst', value: '데이터 분석가' },
    ];

    return (
        <Div>
            <MyPageSubTitle text="🛠 Setting" />
            <RowDiv>
                <ImageArea>
                    <ImageTitle>사진 변경하기</ImageTitle>
                    <ProfileImage />
                </ImageArea>
                <ContentsArea>
                    <UserDataArea>
                        <UserInfoBox userData={userData} jobGroup={tmpJobGroup} />
                    </UserDataArea>
                    <BtnArea>
                        <DeleteUserBtn>회원 탈퇴</DeleteUserBtn>
                        <BtnRowDiv>
                            <EditBtn>수정하기</EditBtn>
                            <SubmitBtn>저장하기</SubmitBtn>
                        </BtnRowDiv>
                    </BtnArea>
                </ContentsArea>
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
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 1%;
`;

const ImageArea = styled.div`
    flex-grow: 1;
    font-weight: 500;
`;

const ImageTitle = styled.div`
    width: 150px;
    justify-self: left;
`;

const ContentsArea = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const UserDataArea = styled.div`
    flex-grow: 1;
`;

const BtnArea = styled.div`
    flex-grow: 1;
`;

const Button = styled.button`
    border-radius: 5px;
    width: 80px;
    height: 30px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.color.buttonColor};
    &:hover {
        background-color: ${(props) => props.theme.color.buttonHoverColor};
    }
`;

const DeleteUserBtn = styled(Button)``;

const BtnRowDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-between;
`;

const EditBtn = styled(Button)``;

const SubmitBtn = styled(Button)``;
