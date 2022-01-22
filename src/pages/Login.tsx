import styled from 'styled-components';
import LoginButton from '../components/LoginButton';

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
                <LoginButton />
                <LoginButton />
            </FormDiv>
        </ContainerDiv>
    );
};

export { Login };

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