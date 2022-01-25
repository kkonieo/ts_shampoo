import styled from 'styled-components';
import LoginDiv from './LoginDiv';
import { GithubImg, GoogleImg, KakaotalkImg, LoginButton, LoginInput, Form } from '../../components';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    key?: string;
};

type FormData = {
    userId: string;
    userPassword: string;
  };

const Login: React.FC<Props> = ({ key }) => {

    const navigate = useNavigate();

    // 유저 정보
    const [user, setUser] = useState<FormData>({
        userId: "",
        userPassword: "",
    });

    // 더미 데이터
    const dummyUser: FormData = {
        userId: "dummy",
        userPassword: "12345678a",
    };
    
    // console.log("user", user);

    // useForm 세팅
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
    const onSubmit = handleSubmit(data => {
        // console.log("onSubmit", data)
        setUser(current => {
            return {
                ...current,
                userId: data.userId,
                userPassword: data.userPassword,
            }
        });
        if (user === dummyUser) {
            navigate('/');
        }
    });

    return (
        <LoginDiv>
            <p>EliceFolio</p>
            <Form onSubmit={onSubmit}>
                <LoginInput
                    type="email"
                    placeholder='아이디'
                    {...register("userId", { required: true })} />
                <LoginInput
                    type="password"
                    placeholder='비밀번호'
                    {...register("userPassword", { required: true })} />
                {errors.userPassword && <p>{errors.userPassword.message}</p>}
                <LoginButton type='submit' text='로그인' className="blue_button" />
                <LoginButton type='button' text='회원가입' to='/singup' className="gray_button" />
            </Form>
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