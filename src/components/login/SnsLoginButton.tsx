import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LoginSpace } from 'LoginModule';
import { GithubImg, GoogleImg, NaverImg } from '../';

const SnsLoginButton: React.FC<LoginSpace.SnsLoginButtonProps> = ({ text, to, color }) => {

    // 버튼에 따라 어느 소셜로 보낼지 선택!
    const navigate = useNavigate();

    function handleClick(): void {
        navigate(to);
    }

    return (
        <SnsButton
            onClick={handleClick}
            color={color}
            to={to}>
            {
                to === "github" ? <GithubImg />
                : to === "google" ? <GoogleImg />
                : to === "naver" && <NaverImg />
            }
            {text}
        </SnsButton>
    );
};

export { SnsLoginButton };

// styled-components
    
const SnsButton = styled.button<{ color: string, to: string }>`
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

    background-color: ${ props => props.color };

    cursor: pointer;

    & img {
        position: absolute;

        top: 10px;
        left: 30px;

        filter: invert(96%) sepia(99%) saturate(3%) hue-rotate(335deg) brightness(104%) contrast(100%);
    }
`;