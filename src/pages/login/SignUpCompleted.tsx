import styled from 'styled-components';

const SignUpCompleted = () => {
    return (
        <>
            <WelcomeP>가입이 완료되었습니다.</WelcomeP>
        </>
    );
};

export default SignUpCompleted;

// styled-components

const WelcomeP = styled.p`
    font-size: 2rem;
    font-family: 'Montserrat', 'sans-serif';
    font-weight: 800;

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;