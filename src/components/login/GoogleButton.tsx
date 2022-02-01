import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';
import { GoogleImg } from '../../components';

const responseGoogle = (response: any) => {
    console.log('response', response);
    console.log('profile', response.getAuthResponse().id_token);
  }

const GoogleLoginButton = () => {
    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
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
    )
}

const GoogleSignUpIcon = () => {
    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy='single_host_origin'
            render={ renderProps => (
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