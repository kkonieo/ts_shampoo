import styled from 'styled-components';
import { LoginButton } from '../../components';
import { Dropdown, Input as SemanticInput } from 'semantic-ui-react'

const SignUpUser = () => {

    const options = [
        { key: 'naver', text: 'naver.com', value: '.naver.com' },
        { key: 'daum', text: 'daum.net', value: '.daum.net' },
        { key: 'google', text: 'gmail.com', value: '.gmail.com' },
    ]
    
    return (
        <>
            <p>EliceFolio</p>
            <FormDiv style={{position: "relative"}}>
                <SemanticInput label={<Dropdown defaultValue='.naver.com' options={options} />} labelPosition='right' placeholder='아이디(이메일주소)' />
                <DoubleCheckButton type='button' text='중복확인' className='blue_button' />
                <Input placeholder='이름' />
                <Input placeholder='비밀번호' type="password" />
                <Input placeholder='비밀번호 확인' type="password" />
                <LoginButton type='submit' text='다음으로' className='gray_button' />
            </FormDiv>
        </>
    );
};

export default SignUpUser;

// styled-components


// 아이디, 비밀번호 입력창
const Input = styled.input`
    all: unset;

    display: block;

    padding: 10px;
    margin: 5px 0;

    width: 300px;

    border-color: #E0E0E0;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
`;

const DoubleCheckButton = styled(LoginButton)`
    position: absolute;

    top: 0;
    right: -130px;

    width: 100px;

    color: white;
    background-color: #5993F6;
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;

    & .ui.input {
        margin: 5px 0;
    }

    & .ui[class*="right labeled"].input>input {
        border-radius: 5px;
        padding: 10px;
    }

    & .ui[class*="right labeled"].input>input::placeholder {
        color: gray;
    }

    & .ui.labeled.input>.label {
        padding: 10px;
    }
`;