import styled from 'styled-components';

const Logo = (): JSX.Element => {

    return (
        <LogoP>ElicePolio</LogoP>
    );
};

export { Logo };

// styled-components

const LogoP = styled.p`
    color: ${({ theme }) => theme.color.defaultText};
    font-family: 'AppleSDGothicNeo', 'sans-serif';
    font-size: 2rem;
    font-weight: bold;
`;