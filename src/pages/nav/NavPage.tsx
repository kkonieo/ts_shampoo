import styled from 'styled-components';
import { navTheme } from '../../utils/styles/theme';
import { useOutlet } from 'react-router-dom';
import { IconDiv, NavLink } from '../../components';

const NavPage = () => {
    //중첩 라우팅된 페이지
    const outlet = useOutlet();
    const name: string = 'Minyoung Lee';
    // 현재 주소 파악

    return (
        <BackgroundDiv>
            <NavContainer>
                <NavDiv>
                    <IconDiv />
                    <UserPictureDiv>
                        <img src={`${process.env.PUBLIC_URL}/img/userDefault.png`} alt="사용자 이미지" />
                    </UserPictureDiv>
                    <h2>{name}</h2>
                    <NavLink />
                </NavDiv>
                <ContentDiv>{outlet}</ContentDiv>
            </NavContainer>
        </BackgroundDiv>
    );
};

export default NavPage;

const BackgroundDiv = styled.div`
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

// 페이지
const NavContainer = styled.div`
    height: 70vh;
    width: 70vw;
    display: flex;
`;

// 왼쪽 네비게이션 영역
const NavDiv = styled.div`
    width: 18%;
    min-width: 200px;
    color: ${navTheme.color.sub};
    font-family: 'Montserrat', 'EliceRegular', 'Heltica';
    font-weight: bold;
    background: ${navTheme.color.main};
    border-radius: 30px 0 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        background: none;
        border: none;
        color: ${navTheme.color.sub};
        font-weight: bold;
    }

    .active {
        background-color: #5185dd;
        border-radius: 15px;
    }

    a {
        text-decoration: none;
        color: ${navTheme.color.sub};
    }
`;

// 클릭 시 다른 페이지로 이동하는 링크들

//오른쪽 컨텐츠 영역
const ContentDiv = styled.div`
    border-radius: 0 30px 30px 0;
    width: 82%;
    background-color: white;
    overflow-y: auto;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

// 사용자 이미지
const UserPictureDiv = styled.div`
    margin: 10% auto 0 auto;
    background-color: ${navTheme.color.background};
    border-radius: 50%;

    width: 150px;
    min-width: 100px;
    height: 150px;
    min-height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 10px solid ${navTheme.color.sub};
    img {
        padding: 7%;
        width: 80%;
        object-fit: scale-down;
    }
`;
