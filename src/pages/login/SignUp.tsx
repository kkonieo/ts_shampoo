import { LoginContainer } from './LoginContainer';
import { SignUpUser, SignUpCompleted } from './index';
import { useRecoilState } from 'recoil';
import { pageState } from '../../utils/data/atom';
import { LoginSpace } from 'LoginModule';
import { useEffect } from 'react';

const SignUp = () => {

    // 0은 정보 입력, 1은 직군 선택
    const [page, setPage] = useRecoilState<LoginSpace.SignUpPageProps>(pageState);

    const renderPage = renderHTML();

    // 페이지에 따라 컴포넌트 렌더링할 함수
    function renderHTML() {
        if (page === 0) {
            return (
                <SignUpUser />
            )
        } else {
            return (
                <SignUpCompleted />
            )
        }
    }

    // 회원가입 페이지 state 리셋
    useEffect(() => setPage(0), []);

    return (
        <LoginContainer>
            {renderPage}
        </LoginContainer>
    );
};

export { SignUp };