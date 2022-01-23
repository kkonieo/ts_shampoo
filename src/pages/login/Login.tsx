import styled from 'styled-components';
import LoginDiv from './LoginDiv';
import { GithubImg, GoogleImg, KakaotalkImg, LoginButton } from '../../components';

interface Props {
    key?: string;
};

const Login: React.FC<Props> = ({ key }) => {
    return (
        <LoginDiv>
            <p>EliceFolio</p>
            <form>
                <Input placeholder='아이디' />
                <Input placeholder='비밀번호' />
                <LoginButton type="submit" text="로그인" />
                <LoginButton type="button" text="회원가입" to="/singup" />
            </form>
            <IconDiv>
                <GithubImg />
                <GoogleImg />
                <KakaotalkImg />
            </IconDiv>
        </LoginDiv>
    );
};

export default Login;

// styled-components


// 아이디, 비밀번호 입력창
const Input = styled.input`
    all: unset;

    display: block;

    padding: 10px;
    margin: 10px 0;

    width: 300px;

    border-color: #E0E0E0;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
`;

// 아이콘 영역
const IconDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;

    width: 100%;

    margin-top: 20px;
    
    & .githubIcon {
        justify-self: end;
    }

    & .googleIcon {
        justify-self: center;
    }
`;