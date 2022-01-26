import LoginContainer from './LoginContainer';
import { SignUpUser, SignUpJob, SignUpCompleted } from './index';
import { useRecoilValue } from 'recoil';
import { pageState } from '../../utils/data/atom';

interface Props {
    key?: string;
};

const SignUp: React.FC<Props> = ({ key }) => {

    // 0은 정보 입력, 1은 직군 선택, 2는 가입 완료
    const page = useRecoilValue<number>(pageState);

    // 페이지에 따라 컴포넌트 렌더링할 함수

    function renderHTML() {
        if (page === 0) {
            return (
                <SignUpUser />
            )
        } else if (page === 1) {
            return (
                <SignUpJob />
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

export default SignUp;