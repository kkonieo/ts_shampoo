import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import styled from 'styled-components';

const SignUpCompleted = () => {

    const navigate = useNavigate();

    // 가입 완료 후 2초 후에 홈으로 이동
    useEffect(() => { 
        const timer = setTimeout(() => { navigate('/', { replace: true }); }, 2000);
        return (() => {
            clearTimeout(timer);
        })
    });

    return (
        <>
            <WelcomeP>가입이 완료되었습니다.</WelcomeP>
        </>
    );
};

export { SignUpCompleted };

// styled-components

const WelcomeP = styled.p`
    font-size: 2rem;
    font-family: 'Montserrat', 'sans-serif';
    font-weight: 800;

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;