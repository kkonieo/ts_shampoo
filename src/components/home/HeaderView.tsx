import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { userInfoData } from '../../utils/data/atom';
import { Button } from '../Button';

interface LoggedInUser {
    id: string;
    email: string;
    name: string;
}

const cookies: Cookies = new Cookies();

export const HeaderView = ({ name }: { name: string | undefined }) => {
    const [login, setLogin] = useState<boolean>(false);
    const userInfo = useRecoilValue(userInfoData);

    //non-null assertion operator
    const loginUserObj: LoggedInUser | null = JSON.parse(sessionStorage.getItem('userProfile')!);
    const myPortpolioObj = userInfo.find((i) => i.slug === loginUserObj?.id);

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
                <NavLink
                    to={`/${myPortpolioObj?.id}`}
                    state={{
                        currentUserData: {
                            id: myPortpolioObj?.id,
                            name: myPortpolioObj?.name,
                            job: myPortpolioObj?.job,
                            user_skill: myPortpolioObj?.user_skill,
                            img: myPortpolioObj?.img,
                            slug: myPortpolioObj?.slug,
                        },
                    }}
                >
                    나의 포트폴리오
                </NavLink>
                <IdSpan>{name}님</IdSpan>
                <NavLink
                    to="/"
                    onClick={() => {
                        setLogin(false);
                        sessionStorage.clear();
                        cookies.remove('accessToken');
                        cookies.remove('refreshToken');
                        cookies.remove('session');
                        cookies.remove('G_AUTHUSER_H');
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
