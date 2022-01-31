import styled from 'styled-components';
import { LoginContainer } from './LoginContainer';
import { GithubImg, GoogleImg, NaverImg, SnsLoginButton } from '../../components';
import { useSetRecoilState } from 'recoil';
import { pageState } from '../../utils/data/atom';
import { useEffect } from 'react';
import { LoginSpace } from 'LoginModule';
import { GoogleLogin } from 'react-google-login';

const Login = () => {

    // recoil 페이지 초기화
    const setPage = useSetRecoilState<LoginSpace.SignUpPageProps>(pageState);

    // SNS 아이콘 클릭 시 리다이렉트 될 URL
    const oauthRedirect = "http://localhost:3000/redirect";

    // naver
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const naverUri: string = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=1&redirect_uri=${oauthRedirect}`

    // github
    const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const githubUri: string = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${oauthRedirect}&scope=user:email%20read:user&state=1`

    // google
    const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
    const googleUri: string = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${oauthRedirect}&scope=openid%20profile%20email&access_type=offline&state=1`

    function handleClick(event: any) {
        if (event.target.name === "naverIcon") {
            window.open(naverUri, "_self");
        } else if (event.target.name === "githubIcon") {
            window.open(githubUri, "_self");
        } else {
            window.open(googleUri, "_self");
        }
    }

    const responseGoogle = (response: any) => {
        console.log('response', response);
      }

    // 회원가입 페이지 번호 리셋
    useEffect(() => setPage(0));

    return (
        <LoginContainer>
            <Logo>EliceFolio</Logo>
            <SnsLoginButton text='깃허브로 로그인' to="github" color="black" />
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                uxMode='redirect'
                redirectUri={oauthRedirect}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy='single_host_origin'
                render={ renderProps => (
                    <GoogleButton
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}>
                        <GoogleImg />
                        구글로 로그인
                    </GoogleButton>
                )}
            />
            <SnsLoginButton text='네이버로 로그인' to='naver' color="#19CE60" />
            <TextP>회원이 아니신가요?</TextP>
            <IconDiv onClick={(event: any) => handleClick(event)}>
                <GithubImg size="20%" />
                <GoogleImg size="40%" />
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

// 구글 버튼
const GoogleButton = styled.button`
    all: unset;

    position: relative;

    width: 19.5vw;
    height: 6.7vh;

    margin: 5px 0;

    border-radius: 10px;

    text-align: center;
    font-family: 'AppleSDGothicNeo', 'sans-serif';
    color: white;
    font-size: 1vw;

    background-color: #EA4335;

    cursor: pointer;

    & img {
        position: absolute;

        top: 10px;
        left: 30px;

        filter: invert(96%) sepia(99%) saturate(3%) hue-rotate(335deg) brightness(104%) contrast(100%);
    }
`;

// 아이콘 영역
const IconDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;

    width: 100%;
    
    & .githubIcon {
        justify-self: end;
    }

    & .googleIcon {
        justify-self: center;
    }
`;

const TextP = styled.p`
    color: #757575;
    font-family: 'AppleSDGothicNeo', 'sans-serif';
    font-size: 1vw;

    margin: 3vh 0;
    
`;