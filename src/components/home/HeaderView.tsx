import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderView = ({ name }: { name: string }) => {
    const [login, setLogin] = useState<boolean>(false);

    const Login = () => {
        return (
            <>
                <ButtonGroupDiv>
                    <Button to="/login">로그인</Button>
                </ButtonGroupDiv>
            </>
        );
    };
    const Logout = () => {
        return (
            <>
                <NavLink to="/id">나의 포트폴리오</NavLink>
                <IdSpan>{name}님</IdSpan>
                <LogoutButton
                    to="/"
                    onClick={() => {
                        setLogin(true);
                    }}
                >
                    로그아웃
                </LogoutButton>
            </>
        );
    };

    return (
        <>
            <Header>
                <LogoLink to="/">
                    <Logo>EliceFolio</Logo>
                </LogoLink>
                <Nav>
                    <NavLink to="/intro">서비스 소개</NavLink>
                    {login ? <Login /> : <Logout />}
                </Nav>
            </Header>
        </>
    );
};

const Header = styled.header`
    height: 80px;
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;
    box-shadow: 0 1px 4px rgb(0, 0, 0, 0.1);
`;
const LogoLink = styled(Link)`
    text-decoration: none;
    color: #3a3a3a;
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
const Button = styled(Link)`
    display: inline-flex;
    width: 80px;
    height: 40px;
    border-radius: 9999px;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.text};
`;
const IdSpan = styled.span`
    margin-left: 20px;
`;
const LogoutButton = styled(Button)`
    margin-left: 16px;
    width: 96px;
    background-color: ${(props) => props.theme.color.buttonBackground};
    color: ${(props) => props.theme.color.buttonText};
    border: 1px solid ${(props) => props.theme.color.background};
`;
