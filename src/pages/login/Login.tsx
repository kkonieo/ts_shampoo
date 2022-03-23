import styled from 'styled-components';
import { LoginContainer } from './LoginContainer';
import { GithubImg, NaverImg, SnsLoginButton, GoogleLoginButton, GoogleSignUpIcon } from '../../components';
import { useSetRecoilState } from 'recoil';
import { pageState } from '../../utils/data/atom';
import { useEffect } from 'react';
import { naverClient, githubClient } from '../../utils/data/loginApiKey';
import { LoginSpace } from 'LoginModule';

function isLogin(): void {
    if (sessionStorage?.getItem('userProfile')) {
        alert('이미 로그인 중입니다. 홈으로 이동합니다.');
        window.open('/', '_self');
    };
};

const Login = () => {

    // recoil 페이지 초기화
    const setPage = useSetRecoilState<LoginSpace.SignUpPageProps>(pageState);

    // SNS 아이콘 클릭에 따라 로그인/회원가입 리다이렉트 페이지 리턴하는 함수
    function setRedirectUri(name: string): string {
        // SNS 아이콘 클릭 시 리다이렉트 될 URL
        const signupRedirect = "http://localhost:3000/redirect/signup";

        if (name === "naver") return `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClient.id}&state=1&redirect_uri=${signupRedirect}`;
        if (name === "github") return `https://github.com/login/oauth/authorize?client_id=${githubClient.id}&redirect_uri=${signupRedirect}&scope=user:email%20read:user&state=1`;

        return "";
    }

    // 네이버와 깃허브는 일시 잠금
    function handleClick(event: any) {
        // const redirectUri: strigit ng = setRedirectUri(event.target.name);
        // window.open(redirectUri, "_self");
    }

    // 회원가입 페이지 번호 리셋
    useEffect(() => {
        setPage(0);
        isLogin();
    });

    return (
        <LoginContainer>
            <Logo>EliceFolio</Logo>
            <SnsLoginButton text='Comming Soon' to="github" color="black" />
            <GoogleLoginButton />
            <SnsLoginButton text='Comming Soon' to='naver' color="#19CE60" />
            <TextP>회원이 아니신가요?</TextP>
            <IconDiv onClick={(event: any) => handleClick(event)}>
                <GithubImg size="20%" />
                <GoogleSignUpIcon />
                <NaverImg size="20%" />
            </IconDiv>
        </LoginContainer>
    );
};

export { Login };

// styled-components

// 로고 (완성되면 삭제 예정)
const Logo = styled.p`
    background-color: #5993F6;
    width: 13vw;
    height: 10.6vh;

    margin-bottom: 30px;

    @media screen and (max-height: 340px) {
    margin-bottom: 1vh;
}
`;

// 아이콘 영역
const IconDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;

    width: 100%;
    
    & .github {
        justify-self: end;
    }

    & .google {
        justify-self: center;
    }
`;

const TextP = styled.p`
    color: #757575;
    font-family: 'AppleSDGothicNeo', 'sans-serif';
    font-size: 1vw;

    margin: 3vh 0;
    
`;