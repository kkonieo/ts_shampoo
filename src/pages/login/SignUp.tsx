import { LoginContainer } from './LoginContainer';
import { SignUpUser, SignUpCompleted } from './index';
import { useRecoilValue } from 'recoil';
import { pageState } from '../../utils/data/atom';

const SignUp = () => {

    // 0은 정보 입력, 1은 직군 선택, 2는 가입 완료
    const page = useRecoilValue<number>(pageState);

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
    
    const renderPage = renderHTML();


    return (
        <LoginContainer>
            {renderPage}
        </LoginContainer>
    );
};

export { SignUp };