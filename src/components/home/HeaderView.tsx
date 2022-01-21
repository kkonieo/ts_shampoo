import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    height: 80px;
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;
`;
const Logo = styled.h1`
    font-size: 24px;
    margin-left: 40px;
`;
const Nav = styled.nav`
    display: flex;
    align-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 40px;
`;
const NavLink = styled(Link)`
    margin-left: 28px;
    text-decoration: none;
    color: ${(props) => (props ? '#222' : undefined)};
`;
const ButtonGroupDiv = styled.div`
    margin-left: 28px;
`;
const Button = styled.button`
    width: 80px;
    height: 40px;
    border-radius: 9999px;
    background-color: ${(props) => (props ? '#5993F6' : undefined)};
    color: ${(props) => (props ? '#fff' : undefined)};
`;
const SignupButton = styled(Button)`
    background-color: ${(props) => (props ? '#f5f5f5' : undefined)};
    color: ${(props) => (props ? '#757575' : undefined)};
    margin-left: 12px;
`;

export const HeaderView = () => {
    return (
        <>
            <Header>
                <Logo>EliceFolio</Logo>
                <Nav>
                    <NavLink to="#">팀 소개</NavLink>
                    <NavLink to="#">나의 포트폴리오</NavLink>
                    <ButtonGroupDiv>
                        <Button>로그인</Button>
                        <SignupButton>팀 소개</SignupButton>
                    </ButtonGroupDiv>
                </Nav>
            </Header>
        </>
    );
};
