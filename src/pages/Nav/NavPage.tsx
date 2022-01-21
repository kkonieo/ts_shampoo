import styled from 'styled-components';
import { navTheme } from '../../utils/styles/theme';
//배경화면
const Div = styled.div`
    background-color: #f5f5f5;
    display: flex;
    width: 100vw;
    height: 100vh;
`;
// 페이지
const NavContainer = styled.div`
    margin: auto;
    min-width: 1200px;
    overflow: hidden;
    height: 70vh;
    display: flex;
`;

// 왼쪽 네비게이션 영역
const NavDiv = styled.div`
    width: 30%;
    color: ${navTheme.color.sub};
    font-family: 'EliceBold';
    background: ${navTheme.color.main};
    border-radius: 15px 0 0 15px;

    ul {
        list-style: none;
    }

    img {
        fill: blue;
    }
`;

//오른쪽 컨텐츠 영역
const ContentDiv = styled.div`
    width: 70%;
    background-color: white;
    border-radius: 0 15px 15px 0;
`;
const NavPage = () => {
    return (
        <Div>
            <NavContainer>
                <NavDiv>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/img/home.svg`} alt="홈으로 가기" />
                        <img src={`${process.env.PUBLIC_URL}/img/cog-outline.svg`} alt="내 정보 설정" />
                    </div>
                    <h1>MinyoungLee</h1>
                    <ul>
                        <li>하하</li>
                        <li>하하</li>
                        <li>하하</li>
                        <li>English</li>
                    </ul>
                </NavDiv>
                <ContentDiv></ContentDiv>
            </NavContainer>
        </Div>
    );
};

export default NavPage;
