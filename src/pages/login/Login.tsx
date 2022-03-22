import styled from 'styled-components';
import { LoginContainer } from './LoginContainer';
import { GithubImg, NaverImg, SnsLoginButton, GoogleLoginButton, GoogleSignUpIcon, Logo } from '../../components';
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
            <Logo />
            <TextP>예비 개발자들이 만든 ElicePolio에서 <br />여러분의 포트폴리오를 멋지게 준비해보세요.
            </TextP>
            <GoogleLoginButton />
            <SignUpP>회원이 아니신가요?</SignUpP>
            <IconDiv onClick={(event: any) => handleClick(event)}>
                <GoogleSignUpIcon />
            </IconDiv>
        </LoginContainer>
    );
};

export { Login };

// styled-components

// 아이콘 영역
const IconDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items :center;

    height: 10%;
`;

const TextP = styled.p`
    color: ${({ theme }) => theme.color.buttonText};
    font-family: 'AppleSDGothicNeo', 'sans-serif';
    font-size: 0.8rem;
    
    text-align: center;
    line-height: 1rem;

    margin: 3vh 0;
`;

const SignUpP = styled.p`
    color: ${({ theme }) => theme.color.defaultText};
    font-family: 'AppleSDGothicNeo', 'sans-serif';
    
    text-align: center;
    line-height: 1rem;

    margin: 5vh 0 1vh 0;
`;