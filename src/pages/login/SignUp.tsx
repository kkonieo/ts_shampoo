import LoginDiv from './LoginDiv';
import { SignUpUser, SignUpJob, SignUpCompleted } from './index';
import { useState } from 'react';

interface Props {
    key?: string;
};

const SignUp: React.FC<Props> = ({ key }) => {

    // 0은 정보 입력, 1은 직군 선택, 2는 가입 완료
    const [page, setPage] = useState<number>(0);

    const renderPage = renderHTML();
    
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

    return (
        <LoginDiv>
            {renderPage}
        </LoginDiv>
    );
};

export default SignUp;