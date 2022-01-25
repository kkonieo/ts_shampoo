import styled from 'styled-components';
import { useState } from 'react';
import { LoginButton, LoginInput, Form } from '../../components';
import { useForm, } from "react-hook-form";

type FormData = {
    userId: string;
    userName: string;
    userPassword: string;
    userPasswordCheck: string;
};
  
const SignUpUser = () => {

    // 이메일 중복확인 하는 함수
    function handleDoubleCheck(): void {
        // 서버로 보내서 중복 확인하는 로직 들어가야함
        console.log("getValues", getValues("userId"));
    }

    // 메일 주소
    const options = [
        { key: '없음', text: '이메일 선택', value: '이메일 선택' },
        { key: 'naver', text: 'naver.com', value: '.naver.com' },
        { key: 'daum', text: 'daum.net', value: '.daum.net' },
        { key: 'google', text: 'gmail.com', value: '.gmail.com' },
    ]

    // useForm 세팅
    const { register, handleSubmit, formState: {errors}, getValues, watch } = useForm<FormData>();
    const onSubmit = handleSubmit(data => {
        setNewUser(current => {
            return {
                ...current,
                userId: data.userId,
                userName: data.userName,
                userPassword: data.userPassword,
            }
        })
    });

    // 새로 가입하는 유저 정보
    const [newUser, setNewUser] = useState<{
        userId: string;
        userName: string;
        userPassword: string;
    }>({
        userId: "",
        userName: "",
        userPassword: "",
    });

    return (
        <>
            <p>EliceFolio</p>
            <FormDiv onSubmit={onSubmit}>
                <DoubleCheckButton
                    type='button'
                    text='중복확인'
                    className="blue_button"
                    onClick={handleDoubleCheck} />
                <LoginInput
                    placeholder='아이디 (이메일주소)' 
                    {...register('userId', {
                        required: true,
                        pattern: {
                            value: /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/, // eslint-disable-line
                            message: "올바른 이메일 형식이 아닙니다."
                        }
                    })} />
                {errors.userId && <ErrorP>{errors.userId.message}</ErrorP>}
                <LoginInput
                    placeholder='이름'
                    {...register('userName', { required: "이름을 입력해주세요." })} />
                {errors.userName && <ErrorP>{errors.userName.message}</ErrorP>}
                <LoginInput
                    placeholder='비밀번호 (영문, 숫자, 특수문자 포함 8글자 이상)'
                    type='password'
                    {...register('userPassword', {
                        required: true, 
                        minLength: {
                            value: 8,
                            message: "비밀번호는 8자 이상 입력해주세요."
                        },
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                            message: "비밀번호는 영문/숫자/특수문자 조합만 가능합니다."
                        }
                    })} />
                {errors.userPassword && <ErrorP>{errors.userPassword.message}</ErrorP>}
                <LoginInput
                    placeholder='비밀번호 확인'
                    type='password'
                    {...register('userPasswordCheck', {
                        required: true,
                        validate: {
                            passwordChecking: (value: string) => {
                                const password = getValues('userPassword');
                                return value === password || "비밀번호가 일치하지 않습니다."
                            },
                        }
                    })} />
                {errors.userPasswordCheck && <ErrorP>{errors.userPasswordCheck.message}</ErrorP>}
                <LoginButton type='submit' text='다음으로' className="blue_button" />
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
    font-size: 0.5rem;
    color: red;
`;