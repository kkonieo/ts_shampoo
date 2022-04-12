import { MyPageProps } from 'MyPageModule';
import styled from 'styled-components';
import { MyPageSubTitle, ProfileImage } from '../../components/my-page';
import UserInfoBox from '../../components/my-page/UserInfoBox';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api/auth';

const MyPage = () => {
    /*
    axios로 유저 정보들 받아옴
        프로필 사진
        아이디
        이름
        직군
        연동된 계정 정보
    */

    const [userData, setUserData] = useState<MyPageProps.MyPageProps>({
        id: "",
        userName: "",
        userJobGroup: "",
    });

    // 수정 모드
    const [editMode, setEditMode] = useState<boolean>(false);

    const changeImg = (): void => {
        alert('이미지를 변경했습니다');
    };

    // 페이지 접근 시 정보 요청
    useEffect(() => {
        (async () => {
            try {
                const response = await api(true).getSettings();
                response?.status === 200 && 
                setUserData(() => {
                    return {
                        id: response.data[0].email,
                        userName: response.data[0].name,
                        userJobGroup: response.data[0].job,
                        account: response.data[0]?.github,
                        imgSrc: response.data[0]?.img,
                    }
                })
            }
            catch (error: any) {
                console.log('정보 불러오기 오류', error.response);
            }
        })();
    }, []);

    return (
        <Div>
            <MyPageSubTitle text="🛠 Setting" />
            <RowDiv>
                <ImageArea>
                    <ImageTitle>프로필 사진</ImageTitle>
                    <ProfileImage imgSrc={userData?.imgSrc} editMode={editMode} changeImg={changeImg} />
                </ImageArea>
                <ContentsArea>
                    <UserDataArea>
                        <UserInfoBox userData={userData} editMode={editMode} />
                    </UserDataArea>
                    <BtnArea>
                        <button>회원 탈퇴</button>
                        <BtnRowDiv>
                            <button>수정하기</button>
                            <button>저장하기</button>
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
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
`;

const RowDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 1%;

    button,
    .input_file {
        padding: 15px;

        background-color: ${({ theme }) => theme.color.buttonBackground};

        border-radius: 5px;

        cursor: pointer;

        :hover {
            background-color: ${(props) => props.theme.color.buttonHoverColor};
        }
    }
`;

const ImageArea = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-weight: 500;
`;

const ImageTitle = styled.div`
    font-weight: bold;
    font-size: 1.3rem;
    align-self: start;
`;

const ContentsArea = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const UserDataArea = styled.div`
    flex-grow: 0;
`;

const BtnArea = styled.div`
    flex-grow: 1;
`;

const BtnRowDiv = styled.div`
    position: absolute;
    bottom: 20%;
    right: 10%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
`;
