import styled from 'styled-components';
import { Button, Logo } from '../../components';
import { useForm } from "react-hook-form";
import { useSetRecoilState } from 'recoil';
import { pageState } from '../../utils/data/atom';
import { LoginSpace } from 'LoginModule';
import { UserSpace } from 'InformationModule';
import { api } from '../../utils/api/auth';
import { useEffect, useState } from 'react';

const SignUpUser = () => {
    // recoil 페이지 세팅
    const setPage = useSetRecoilState<LoginSpace.SignUpPageProps>(pageState);

    // 유저 이메일은 고정
    const userEmail: string = JSON.parse(sessionStorage.getItem('userProfile') || "")?.email || "";

    // 직군
    const [job, setJob] = useState<UserSpace.Job[]>([]);

    // useForm 세팅
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSpace.SignUpProps>();
    const onSubmit = handleSubmit(data => {
        addProfile({ ...data, email: userEmail });
    });

    // 유저 추가 정보 업데이트하는 API
    async function addProfile(data: LoginSpace.SignUpProps) {
        try {
            const response = await api(true).setSignUpProfile(data);

            if (response.data.success) {
                setPage(1);
            } else alert('유저 정보 업데이트에 실패했습니다.');
        }
        catch (error) { console.log('유저 추가 정보 업데이트 에러', error); };
    };

    // 구글 로그인을 통해 들어오지 않았다면(userEmail이 없다면) 홈으로 보내기
    // JSON.parse 에러로 다운되서 아예 안먹힘...
    // useEffect(() => {
    //     if (!sessionStorage?.getItem('userProfile')) navigate('/');
    // })

    // 윈도우 종료 감지
    const windowObserve = (event: any) => {
        event.preventDefault();
        sessionStorage.clear();
    };

    // 뒤로가기, 다른 페이지로 이동 등 회원가입 도중에 나가면
    useEffect(() => {
        window.addEventListener('unload', windowObserve);
        return () => {
            window.removeEventListener('unload', windowObserve);
        }
    }, []);

    // 직군 API 요청
    useEffect(() => {
        (async () => {
            const response = await api(false).getPosition();
            setJob(response);
        })();
    }, [])

    return (
        <>
            <Logo />
            <Form onSubmit={onSubmit}>
                <FormDiv>
                    <InformationDiv>
                        <p>이메일</p>
                        <p>{userEmail}</p>
                    </InformationDiv>
                    <InformationDiv>
                        <p>이름</p>
                        <LoginInput
                            placeholder='이름'
                            {...register('name', { required: "이름을 입력해주세요." })} />
                    </InformationDiv>
                    {errors.name && <ErrorP>{errors.name.message}</ErrorP>}
                    <InformationDiv>
                        <p>직군</p>
                        <LoginInput list="job" placeholder="직군을 선택해주세요." {...register('job', {
                            required: "직군을 선택해주세요.",
                        })} />
                        <datalist id="job">
                            {job.map((item: UserSpace.Job) => {
                                return <option key={item.id} value={item.name} />
                            })}
                        </datalist>
                    </InformationDiv>
                    {errors.job && <ErrorP>{errors.job.message}</ErrorP>}
                </FormDiv>
                <Button
                    type='submit'
                    text='가입하기'
                    className="blue" />
            </Form>
        </>
    );
};

export { SignUpUser };

// styled-components

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 5vh;

    & div:nth-child(1) {
        justify-content: initial;
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

const InformationDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-family: 'AppleSDGothicNeo', 'sans-serif';
    color: #757575;

    width: 300px;

    & p:nth-child(2) {
        margin-left: 10px;
        padding: 10px;
    }
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 30px;

    align-items: center;
`;

const ErrorP = styled.p`
    font-size: 0.5rem;
    color: red;
    line-height: 0;
`;