import styled from 'styled-components';
import { LoginContainer } from './LoginContainer';
import { GoogleLoginButton, GoogleSignUpIcon, Logo } from '../../components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    // 로그인 여부 체크하기
    function isLogin(): void {
        if (sessionStorage.getItem('userProfile')) {
            alert('이미 로그인 중입니다. 홈으로 이동합니다.');
            navigate('/');
        };
    };

    // 로그인 여부부터 확인하기
    useEffect(() => isLogin(), []);

    return (
        <LoginContainer>
            <Logo />
            <TextP>예비 개발자들이 만든 ElicePolio에서 <br />여러분의 포트폴리오를 멋지게 준비해보세요.
            </TextP>
            <GoogleLoginButton />
            <SignUpP>회원이 아니신가요?</SignUpP>
            <IconDiv>
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