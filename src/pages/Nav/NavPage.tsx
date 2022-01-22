import styled from 'styled-components';
import { navTheme } from '../../utils/styles/theme';
import { Link, useLocation, useOutlet } from 'react-router-dom';

// 전체 배경화면
const Div = styled.div`
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

// 페이지
const NavContainer = styled.div`
    overflow: hidden;
    max-width: 920px;
    height: 70vh;
    width: 80vw;
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
    border-radius: 15px 0 0 15px;
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

    ul {
        padding: 0;
        list-style: none;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    li {
        width: 80%;
        padding: 1vh;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: ${navTheme.color.sub};
    }
`;

//오른쪽 컨텐츠 영역
const ContentDiv = styled.div`
    border-radius: 0 15px 15px 0;
    overflow: hidden;
    width: 82%;
    background-color: white;
`;

// 사용자 이미지 영억
const UserPictureDiv = styled.div``;

// 아이콘 영역
const IconDiv = styled.div`
    margin-top: 2vh;
    margin-right: 1vw;
    margin-left: auto;
    opacity: 0.6;
`;

const NavPage = () => {
    //중첩 라우팅된 페이지
    const outlet = useOutlet();

    // 현재 주소 파악
    const location = useLocation();
    return (
        <Div>
            <NavContainer>
                <NavDiv>
                    <IconDiv>
                        <Link to="..">
                            <img src={`${process.env.PUBLIC_URL}/img/home.svg`} alt="홈으로 가기" />
                        </Link>
                        <Link to="/nav/mypage">
                            <img src={`${process.env.PUBLIC_URL}/img/cog-outline.svg`} alt="마이 페이지" />
                        </Link>
                    </IconDiv>
                    <UserPictureDiv></UserPictureDiv>
                    <h2>Minyoung Lee</h2>
                    <ul>
                        <li className={location.pathname === '/nav' ? 'active' : ''}>
                            <Link to="">About me</Link>
                        </li>
                        <li className={location.pathname === '/nav/project' ? 'active' : ''}>
                            <Link to="project">Project</Link>
                        </li>
                        <li className={location.pathname === '/nav/contact' ? 'active' : ''}>
                            <Link to="contact">Contact</Link>
                        </li>
                    </ul>
                </NavDiv>
                <ContentDiv>{outlet}</ContentDiv>
            </NavContainer>
        </Div>
    );
};

export default NavPage;
