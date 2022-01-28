import styled from 'styled-components';
import { LoginContainer } from './LoginContainer';
import { GithubImg, GoogleImg, NaverImg, SnsLoginButton } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { pageState } from '../../utils/data/atom';
import { useEffect } from 'react';

const Login = () => {

    // recoil 페이지 세팅
    const setPage = useSetRecoilState<number>(pageState);

    const navigate = useNavigate();

    // SNS 아이콘 클릭 시 리다이렉트 될 URL
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

    // naver
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const naverUri: string = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=1&redirect_uri=${REDIRECT_URI}`

    function handleClick(e: any) {
        if (e.target.name === "naverIcon") {
            window.open(naverUri);
        } else if (e.target.name === "githubIcon") {
            navigate('/signup');
        } else {
            navigate('/signup');
        }
    }

    // 회원가입 페이지 번호 리셋
    useEffect(() => setPage(0));

    return (
        <LoginContainer>
            <Logo>EliceFolio</Logo>
            <SnsLoginButton text='깃허브로 로그인' to="github" color="black" />
            <SnsLoginButton text='구글로 로그인' to='google' color="#EA4335" />
            <SnsLoginButton text='네이버로 로그인' to='naver' color="#19CE60" />
            <TextP>회원이 아니신가요?</TextP>
            <IconDiv onClick={e => handleClick(e)}>
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