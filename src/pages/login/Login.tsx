import styled from 'styled-components';
import LoginDiv from './LoginDiv';
import { GithubImg, GoogleImg, NaverImg, LoginButton, LoginInput, Form } from '../../components';
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

    // // 카카오 로그인 테스트
    // const handleGetKakao = async () => {
    //     const REST_API_KEY = process.env.REACT_APP_CLIENT_ID;
    //     const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    //     // console.log('REST_API_KEY', REST_API_KEY);
    //     // console.log('REDIRECT_URI', REDIRECT_URI);
    //     const kakaoGet = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    //     window.open(kakaoGet);

    //     try {    
    //         const response = axios.get(kakaoGet)
    //                     .then(() => {
    //                         const tokenCode = new URL(window.location.href).searchParams.get('code')
                    
    //                         const tokenPost = axios({
    //                             method: "post",
    //                             url: "https://kauth.kakao.com/oauth/token",
    //                             data: {
    //                                 "grant_type": "authorization_code",
    //                                 "client_id": `${REST_API_KEY}`,
    //                                 "code": `${tokenCode}`,
    //                                 "redirect_uri": `${REDIRECT_URI}`,
    //                             },
    //                             headers: {
    //                                 "Content-Type": "application/x-www-form-urlencoded"
    //                             },
    //                         })
    //                             .then((response) => console.log(response))

    //                     })
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }




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
                <NaverImg />
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