import styled from 'styled-components';
import { Button } from '../../components';
import { useForm } from "react-hook-form";
import { useSetRecoilState } from 'recoil';
import { pageState } from '../../utils/data/atom';
import { LoginSpace } from 'LoginModule';
import { setSignUpProfile } from '../../utils/api/auth';

const SignUpUser = () => {

    // recoil 페이지 세팅
    const setPage = useSetRecoilState<LoginSpace.SignUpPageProps>(pageState);

    // 유저 이메일은 고정
    const userEmail: string = JSON.parse(sessionStorage?.getItem('userProfile') || "")?.email;

    // useForm 세팅
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSpace.SignUpProps>();
    const onSubmit = handleSubmit(data => {
        console.log('data', { ...data, email: userEmail });
        addProfile({ ...data, email: userEmail });
    });

    // 유저 추가 정보 업데이트하는 API
    async function addProfile(data: LoginSpace.SignUpProps) {
        try {
            const response = await setSignUpProfile(data);

            if (response.data.success) setPage(1);
            if (!response.data.success) alert('유저 정보 업데이트에 실패했습니다.');
        }
        catch (error) { console.log('유저 추가 정보 업데이트 에러', error); };
    };

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
                            {jobOptions.map((item, index) => {
                                return <option key={index} value={item.value} />
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