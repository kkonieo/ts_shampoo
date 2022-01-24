import styled from 'styled-components';
import LoginDiv from './LoginDiv';
import { GithubImg, GoogleImg, KakaotalkImg, LoginButton } from '../../components';
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
            <form onSubmit={onSubmit}>
                <Input
                    type="email"
                    placeholder='아이디'
                    {...register("userId", { required: true })} />
                <Input
                    type="password"
                    placeholder='비밀번호'
                    {...register("userPassword", { required: true })} />
                {errors.userPassword && <p>{errors.userPassword.message}</p>}
                <LoginButton type='submit' text='로그인' className='blue_button' />
                <LoginButton type='button' text='회원가입' to='/singup' className='gray_button' />
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