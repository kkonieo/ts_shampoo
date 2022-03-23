import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button';

export const HeaderView = ({ name }: { name: string | undefined }) => {
    const [login, setLogin] = useState<boolean>(false);

    useEffect(() => {
        if (typeof name === 'string') {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }, [name]);

    const Login = () => {
        return (
            <>
                <ButtonGroupDiv>
                    <NavLink to="/login">
                        <Button type="button" className="blue" width="80px" height="40px" text="로그인" />
                    </NavLink>
                </ButtonGroupDiv>
            </>
        );
    };
    const Logout = () => {
        return (
            <>
                <NavLink to="/id">나의 포트폴리오</NavLink>
                <IdSpan>{name}님</IdSpan>
                <NavLink
                    to="/"
                    onClick={() => {
                        setLogin(false);
                        sessionStorage.clear();
                    }}
                >
                    <Button type="button" className="gray" width="96px" height="40px" text="로그아웃" />
                </NavLink>
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
                    {login ? <Logout /> : <Login />}
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
const IdSpan = styled.span`
    margin-left: 20px;
`;
