import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { blueButton, defaultButton } from '../../utils/styles/theme';

const Header = styled.header`
    height: 80px;
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;
    box-shadow: 0 1px 4px rgb(0, 0, 0, 0.1);
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
    background-color: ${blueButton.color.background};
    color: ${blueButton.color.text};
`;
const SignupButton = styled(Button)`
    width: 96px;
    background-color: ${defaultButton.color.background};
    color: ${defaultButton.color.text};
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
                        <SignupButton>회원가입</SignupButton>
                    </ButtonGroupDiv>
                </Nav>
            </Header>
        </>
    );
};
