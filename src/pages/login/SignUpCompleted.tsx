import styled from 'styled-components';

const SignUpCompleted = () => {
    return (
        <>
            <TextP>가입이 완료되었습니다.</TextP>
        </>
    );
};

export default SignUpCompleted;

// styled-components

const TextP = styled.p`
    font-size: 2rem;
    font-family: 'Montserrat', 'sans-serif';
    font-weight: 800;
`;