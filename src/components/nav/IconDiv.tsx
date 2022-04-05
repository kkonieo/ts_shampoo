import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IconDiv = () => {
    // 로그인 유저인지 확인하기
    const userProfile: string | null = sessionStorage.getItem('userProfile');

    const handleClick = () => {
        !userProfile && alert('로그인 유저만 볼 수 있는 페이지입니다');
    };

    return (
        <Div>
            <Link to="..">
                <img src={`${process.env.PUBLIC_URL}/img/home.svg`} alt="홈으로 가기" />
            </Link>

            <Link to={userProfile ? '/nav/mypage' : ''} onClick={handleClick}>
                <img src={`${process.env.PUBLIC_URL}/img/cogOutline.svg`} alt="마이 페이지" />
            </Link>
        </Div>
    );
};

export default IconDiv;

const Div = styled.div`
    display: flex;
    margin-top: 2vh;
    margin-right: 1vw;
    margin-left: auto;

    a {
        opacity: 0.8;
    }
    a:hover {
        opacity: 1;
        transform: scale(1.2);
    }
`;
