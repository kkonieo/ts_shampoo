import styled from 'styled-components';
import { useOutlet ,useParams} from 'react-router-dom';
import { IconDiv, NavLink, UserPicture } from '../../components';
import { ScrollProgress } from '../../components/scrollProgress';
import { useEffect } from 'react';


const NavPage = () => {
    //중첩 라우팅된 페이지
    const outlet = useOutlet();
    const name: string = 'Minyoung Lee';
    // const navId = useParams();
    // 현재 주소 파악

    const detectScroll = (e: any) => {
        const { scrollHeight } = e.target;
        console.log(e.target);
        if (scrollHeight === null) {
            console.log('스크롤 없음');
        }
        console.log('onLoad', scrollHeight);
    };


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

const UserName = styled.div`
    font-size: 1.5em;
`;

//프로그래스바와 오른쪽 컨텐츠 영역을 담을 컨테이너
const ProgressContentsContainer = styled.div`
    border-radius: 0 30px 30px 0;
    width: 82%;
    min-width: 700px;
    height: 100%;
    background-color: white;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

//오른쪽 컨텐츠 영역
const ContentDiv = styled.div`
    min-width: 400px;
    height: 98%;
    background-color: white;
    overflow-y: auto;
    scrollbar-width: none;
    padding: 2.5%;
`;

// 사용자 이미지
const UserPictureDiv = styled.div`
    margin: 10% auto 0 auto;
    background-color: ${(props) => props.theme.color.background};
    border-radius: 50%;

    width: 150px;
    min-width: 100px;
    height: 150px;
    min-height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 10px solid ${(props) => props.theme.color.sub};
    img {
        padding: 7%;
        width: 80%;
    }

`;
// 사용자 이미지
