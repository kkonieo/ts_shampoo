import styled from 'styled-components';
import LoginDiv from './LoginDiv';
import { LoginButton } from '../../components';

interface Props {
    key?: string;
};

const SignUp: React.FC<Props> = ({ key }) => {
    return (
        <LoginDiv>
            <p>EliceFolio</p>
            <form>
                <Input placeholder='아이디(이메일주소)' />
                <Input placeholder='이름' />
                <Input placeholder='비밀번호' />
                <Input placeholder='비밀번호 확인' />
                <LoginButton type='submit' text='다음으로' className='gray_button' />
            </form>
        </LoginDiv>
    );
};

export default SignUp;

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