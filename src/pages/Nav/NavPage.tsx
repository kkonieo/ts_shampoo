import styled from 'styled-components';
import { navTheme } from '../../utils/styles/theme';
import { Link, useLocation, useOutlet } from 'react-router-dom';
//배경화면
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
    min-width: 1200px;
    overflow: hidden;
    height: 70vh;
    display: flex;
`;

// 왼쪽 네비게이션 영역
const NavDiv = styled.div`
    width: 18%;
    color: ${navTheme.color.sub};
    font-family: 'Montserrat', 'EliceRegular';
    font-weight: bold;
    background: ${navTheme.color.main};
    border-radius: 15px 0 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        background: none;
        border: none;
        color: white;
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

    img {
        fill: blue;
    }
`;

//오른쪽 컨텐츠 영역
const ContentDiv = styled.div`
    width: 82%;
    background-color: white;
    border-radius: 0 15px 15px 0;
`;

const UserPictureDiv = styled.div``;
const IconDiv = styled.div`
    margin-top: 2vh;
    margin-right: 1vw;
    margin-left: auto;
    opacity: 0.6;
`;

const NavPage = () => {
    const outlet = useOutlet();
    const location = useLocation();
    return (
        <Div>
            <NavContainer>
                <NavDiv>
                    <IconDiv>
                        <img src={`${process.env.PUBLIC_URL}/img/home.svg`} alt="홈으로 가기" />
                        <img src={`${process.env.PUBLIC_URL}/img/cog-outline.svg`} alt="내 정보 설정" />
                    </IconDiv>
                    <UserPictureDiv></UserPictureDiv>
                    <h2>Minyoung Lee</h2>
                    <ul>
                        <li className={location.pathname === '/nav/aboutme' ? 'active' : ''}>
                            <Link to="aboutme">About me</Link>
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
