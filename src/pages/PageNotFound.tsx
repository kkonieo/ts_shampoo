import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Page를 찾을 수 없습니다</div>
            <button onClick={() => navigate(-2)}>돌아가기</button>
        </>
    );
};

export { PageNotFound };
