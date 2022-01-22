import styled from 'styled-components';
import { GithubImg, GoogleImg, KakaotalkImg, LoginButton } from '../../components';

interface Props {
    key?: string;
};

const Login: React.FC<Props> = ({ key }) => {
    return (
        <ContainerDiv>
            <FormDiv>
                <p>EliceFolio</p>
                <form>
                    <Input placeholder='아이디' />
                    <Input placeholder='비밀번호' />
                </form>
                <LoginButton color="main" text="로그인" />
                <LoginButton color="background" text="회원가입" />
                <IconDiv>
                    <GithubImg />
                    <GoogleImg />
                    <KakaotalkImg />
                </IconDiv>
            </FormDiv>
        </ContainerDiv>
    );
};

export default Login;

// styled-components

// 배경 div
const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #F5F5F5;
`;

// form div
const FormDiv = styled.div`
    background-color: white;

    width: 400px;
    height: 410px;

    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

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