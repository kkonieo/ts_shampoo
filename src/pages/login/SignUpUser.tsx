import styled from 'styled-components';
import { useState } from 'react';
import { LoginButton, RowDiv, ColumnDiv } from '../../components';
import { useForm } from "react-hook-form";
import { useSetRecoilState  } from 'recoil';
import { pageState } from '../../utils/data/atom';
import { SignUpProps } from 'SignUp'
  
const SignUpUser = () => {

    // useForm 세팅
    const { register, handleSubmit, formState: {errors} } = useForm<SignUpProps>();
    const onSubmit = handleSubmit(data => {
        console.log(data);
        // 서버로 보내서 가입 시키는 로직 들어가야함
        setNewUser(current => {
            return {
                ...current,
                userName: data.userName,
                userJob: data.userJob,
            }
        })
        setPage(1);
    });

    // 새로 가입하는 유저 정보
    const [newUser, setNewUser] = useState<SignUpProps>({
        userEmail: "",
        userName: "",
        userJob: "",
    });

    // recoil 페이지 세팅
    const setPage = useSetRecoilState<number>(pageState);

    // 더미 데이터
    const jobOptions = [
        { key: '1', value: '백엔드' },
        { key: '2', value: '프론트엔드' },
        { key: '3', value: '풀스택' },
        { key: '4', value: '보안' },
        { key: '5', value: '빅데이터' },
        { key: '6', value: '안드로이드' },
    ]

    return (
        <>
            <Logo>EliceFolio</Logo>
            <Form onSubmit={onSubmit}>
                <FormDiv>
                    <InformationDiv>
                        <p>이메일</p>
                        <p>example@naver.com</p>
                    </InformationDiv>
                    <InformationDiv>
                        <p>이름</p>
                        <LoginInput
                            placeholder='이름'
                                {...register('userName', { required: "이름을 입력해주세요." })} />
                    </InformationDiv>
                    {errors.userName && <ErrorP>{errors.userName.message}</ErrorP>}
                    <InformationDiv>
                        <p>직군</p>
                        <LoginInput list="job" placeholder="직군을 선택해주세요." {...register('userJob', {
                            required: "직군을 선택해주세요.",
                        })} />
                        <datalist id="job">
                            {jobOptions.map((item) => {
                                return <option value={item.value} />
                            })}
                        </datalist>
                    </InformationDiv>
                    {errors.userJob && <ErrorP>{errors.userJob.message}</ErrorP>}
                </FormDiv>
                <LoginButton type='submit' text='가입하기' className="blue_button" />
            </Form>
        </>
    );
};

export default SignUpUser;

// styled-components

// 로고 (완성되면 삭제 예정)
const Logo = styled.p`
    background-color: #5993F6;
    width: 200px;
    height: 80px;

    margin-bottom: 30px;

    @media screen and (max-height: 340px) {
    margin-bottom: 1vh;
}
`;

// 이름, 직군 입력창
const LoginInput = styled.input`
    all: unset;

    display: block;

    padding: 10px;
    margin: 5px 0;

    width: 230px;

    border-color: #E0E0E0;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;

    font-family: 'AppleSDGothicNeo', 'sans-serif';

    &::placeholder {
        font-size: 0.8rem;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;

    align-items: center;

    & div:nth-child(1) {
        justify-content: initial;
    }
`;

const InformationDiv = styled(RowDiv)`
    justify-content: space-between;

    font-family: 'AppleSDGothicNeo', 'sans-serif';
    color: #757575;

    width: 300px;

    & p:nth-child(2) {
        margin-left: 20px;
    }
`;

const FormDiv = styled(ColumnDiv)`
    margin-bottom: 30px;
`;

const ErrorP = styled.p`
    font-size: 0.5rem;
    color: red;
    line-height: 0;
`;