import styled from 'styled-components';
import { LoginButton, LoginInput, Form } from '../../components';
import { Dropdown, Input } from 'semantic-ui-react'
import { useForm } from "react-hook-form";

type FormData = {
    userName: string;
    userPassword: string;
    userPasswordCheck: string;
};
  
const SignUpUser = () => {

    // 메일 주소
    const options = [
        { key: 'naver', text: 'naver.com', value: '.naver.com' },
        { key: 'daum', text: 'daum.net', value: '.daum.net' },
        { key: 'google', text: 'gmail.com', value: '.gmail.com' },
    ]

    // useForm 세팅
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
    const onSubmit = handleSubmit(data => {
        console.log("onSubmit", data)
        });
    
    return (
        <>
            <p>EliceFolio</p>
            <FormDiv onSubmit={onSubmit}>
                <DoubleCheckButton
                    type='button'
                    text='중복확인'
                    className='blue_button' />
                <Input
                    label={<Dropdown defaultValue='.naver.com' options={options} />}
                    labelPosition='right'
                    placeholder='아이디 (이메일주소)' />
                <LoginInput
                    placeholder='이름'
                    {...register('userName')} />
                <LoginInput
                    placeholder='비밀번호 (영문, 숫자, 특수문자 포함 6글자 이상)'
                    type='password'
                    {...register('userPassword', {
                        required: true, 
                        minLength: {
                            value: 8,
                            message: "비밀번호는 8자 이상 입력해주세요."
                        },
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                            message: "비밀번호는 영문/숫자/특수문자 조합입니다."
                        }}
                    )} />
                <LoginInput
                    placeholder='비밀번호 확인'
                    type='password'
                    {...register('userPasswordCheck')} />
                {errors.userPassword && <ErrorP>{errors.userPassword.message}</ErrorP>}
                {errors.userPasswordCheck && <ErrorP>{errors.userPasswordCheck.message}</ErrorP>}
                <LoginButton type='submit' text='다음으로' className='gray_button' />
            </FormDiv>
        </>
    );
};

export default SignUpUser;

// styled-components

const DoubleCheckButton = styled(LoginButton)`
    position: absolute;

    top: 0;
    right: -130px;

    width: 100px;

    color: white;
    background-color: #5993F6;
`;

const FormDiv = styled(Form)`
    position: relative;

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

const ErrorP = styled.p`
    color: red;
`;