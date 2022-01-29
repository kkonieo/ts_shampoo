import styled from 'styled-components';
import { useOutlet } from 'react-router-dom';
import { IconDiv, NavLink } from '../../components';
import { ScrollProgress } from '../../components/scrollProgress';

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
                    <UserPicture src="/img/userDefault.png" />
                    <UserName>{name}</UserName>
                    <NavLink />
                </NavDiv>
                <ProgressContentsContainer>
                    {/*프로그래스바*/}
                    <ScrollProgress />
                    <ContentDiv className="content">{outlet}</ContentDiv>
                </ProgressContentsContainer>
            </NavContainer>
        </BackgroundDiv>
    );
};

export default NavPage;

const BackgroundDiv = styled.div`
    background-color: ${(props) => props.theme.color.background};
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
    min-height: 480px;
    display: flex;
`;

// 왼쪽 네비게이션 영역
const NavDiv = styled.div`
    width: 18%;
    min-width: 200px;
    color: ${(props) => props.theme.color.sub};
    font-family: 'Montserrat', 'EliceRegular', 'Heltica';
    font-weight: bold;
    background: ${(props) => props.theme.color.main};
    border-radius: 30px 0 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        background: none;
        border: none;
        color: ${(props) => props.theme.color.sub};
        font-weight: bold;
    }

    .active {
        background-color: #5185dd;
        border-radius: 15px;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.color.sub};
    }
`;

// 클릭 시 다른 페이지로 이동하는 링크들

//프로그래스바와 오른쪽 컨텐츠 영역을 담을 컨테이너
const ProgressContentsContainer = styled.div`
    border-radius: 0 30px 30px 0;
    width: 82%;
    min-width: 700px;
    background-color: white;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

//오른쪽 컨텐츠 영역
const ContentDiv = styled.div`
    min-width: 400px;
    background-color: white;
    overflow-y: auto;
    scrollbar-width: none;
    padding: 2.5%;
`;
// 사용자 이미지
