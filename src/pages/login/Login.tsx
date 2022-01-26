import styled from 'styled-components';
import LoginContainer from './LoginContainer';
import { GithubImg, GoogleImg, NaverImg, SnsLoginButton } from '../../components';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    // console.log("user", user);

    // // 카카오 로그인 테스트
    // const handleGetKakao = async () => {
    //     const REST_API_KEY = process.env.REACT_APP_CLIENT_ID;
    //     const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    //     // console.log('REST_API_KEY', REST_API_KEY);
    //     // console.log('REDIRECT_URI', REDIRECT_URI);
    //     const kakaoGet = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    //     window.open(kakaoGet);

    //     try {    
    //         const response = axios.get(kakaoGet)
    //                     .then(() => {
    //                         const tokenCode = new URL(window.location.href).searchParams.get('code')
                    
    //                         const tokenPost = axios({
    //                             method: "post",
    //                             url: "https://kauth.kakao.com/oauth/token",
    //                             data: {
    //                                 "grant_type": "authorization_code",
    //                                 "client_id": `${REST_API_KEY}`,
    //                                 "code": `${tokenCode}`,
    //                                 "redirect_uri": `${REDIRECT_URI}`,
    //                             },
    //                             headers: {
    //                                 "Content-Type": "application/x-www-form-urlencoded"
    //                             },
    //                         })
    //                             .then((response) => console.log(response))

    //                     })
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }




    return (
        <LoginContainer>
            <Logo>EliceFolio</Logo>
            <SnsLoginButton text='깃허브로 로그인' to="github" color="black" />
            <SnsLoginButton text='구글로 로그인' to='google' color="#EA4335" />
            <SnsLoginButton text='네이버로 로그인' to='naver' color="#19CE60" />
            <TextP>회원이 아니신가요?</TextP>
            <IconDiv>
                <Link to="/signup" className="githubIcon">
                    <GithubImg />
                </Link>
                <Link to="/signup" className="googleIcon">
                    <GoogleImg />
                </Link>
                <Link to="/signup" className="naverIcon">
                    <NaverImg />
                </Link>
            </IconDiv>
        </LoginContainer>
    );
};

export default Login;

// styled-components

// 로고 (완성되면 삭제 예정)
const Logo = styled.p`
    background-color: #5993F6;
    width: 200px;
    height: 80px;

    margin-bottom: 30px;

    @media (max-height: 340px) {
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

    margin: 1.5rem 0;

    @media screen and (max-height: 340px) {
    margin: 5vh 0;
}
    
`;