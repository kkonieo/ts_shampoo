import styled from 'styled-components';
import { LoginSpace } from 'LoginModule';
import { GithubImg, NaverImg } from '../';
import { naverClient, githubClient } from '../../utils/data/loginApiKey';

const SnsLoginButton: React.FC<LoginSpace.SnsLoginButtonProps> = ({ text, to, color }) => {

    // SNS 아이콘 클릭에 따라 로그인/회원가입 리다이렉트 페이지 리턴하는 함수
    function setRedirectUri(name: string): string {
        // SNS 아이콘 클릭 시 리다이렉트 될 URL
        const loginRedirect = "http://localhost:3000/redirect/login";

        if (name === "naver") {
            return `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClient.id}&state=1&redirect_uri=${loginRedirect}`;
        } else if (name === "github") {
            return `https://github.com/login/oauth/authorize?client_id=${githubClient.id}&redirect_uri=${loginRedirect}&scope=user:email%20read:user&state=1`;
        }

        return "";
    }

    function handleClick(event: any) {
        const redirectUri: string = setRedirectUri(event.target.name);
        window.open(redirectUri, "_self");
    }

    return (
        <SnsButton
            onClick={handleClick}
            color={color}
            name={to}
            disabled={true}>
            {
                to === "github" ? <GithubImg />
                    : to === "naver" && <NaverImg />
            }
            {text}
        </SnsButton>
    );
};

export { SnsLoginButton };

// styled-components

const SnsButton = styled.button<{ color: string }>`
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

    background-color: ${props => props.color};

    cursor: pointer;

    & img {
        position: absolute;

        top: 10px;
        left: 30px;

        filter: invert(96%) sepia(99%) saturate(3%) hue-rotate(335deg) brightness(104%) contrast(100%);
    }
`;