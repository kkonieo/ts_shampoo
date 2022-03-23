import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';
import { GoogleImg } from '../../components';
import { userLogin } from '../../utils/api/auth';
import { RequestTokenSpace } from 'LoginModule';

const handleFailed = (response: any) => { console.log('로그인 에러', response); };

const handleLoginSuccess = (response: any) => {
    const auth_token: RequestTokenSpace.GoogleToken = {
        auth_token: response.getAuthResponse().id_token
    };
    isLoginRegistered(auth_token);
}

const handleSignUpSuccess = (response: any) => {
    const auth_token: RequestTokenSpace.GoogleToken = {
        auth_token: response.getAuthResponse().id_token
    };
    isSignUpRegistered(auth_token);
}

// 로그인 시 기가입자 여부 확인
async function isLoginRegistered(token: RequestTokenSpace.GoogleToken) {
    try {
        const response = await userLogin('google', token);

        if (response === "False") { // 가입되지 않은 유저라면
            alert('가입되지 않은 회원입니다. 회원가입 페이지로 이동합니다.');
            window.open('/signup', "_self");
        } else { // 가입된 유저라면
            window.open('/', "_self");
        }
    }
    catch (error) { console.log('구글 로그인 에러', error); };
};

// 회원가입 시 기가입자 여부 확인
async function isSignUpRegistered(token: RequestTokenSpace.GoogleToken) {
    try {
        const response = await userLogin('google', token);

        if (response === "False") { // 가입되지 않은 유저라면
            window.open('/signup', "_self");
        } else { // 가입된 유저라면
            alert('이미 가입된 유저입니다. 자동 로그인합니다.');
            window.open('/', "_self");
        }
    }
    catch (error) { console.log('구글 로그인 에러', error); };
};

const GoogleLoginButton = () => {
    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
            onSuccess={handleLoginSuccess}
            onFailure={handleFailed}
            cookiePolicy='single_host_origin'
            render={renderProps => (
                <GoogleButton
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}>
                    <GoogleImg />
                    구글로 로그인
                </GoogleButton>
            )}
        />
    )
}

const GoogleSignUpIcon = () => {
    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
            onSuccess={handleSignUpSuccess}
            onFailure={handleFailed}
            cookiePolicy='single_host_origin'
            render={renderProps => (
                <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}>
                    <GoogleImg size="40%" />
                </button>
            )}
        />
    )
}

export { GoogleLoginButton, GoogleSignUpIcon };



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