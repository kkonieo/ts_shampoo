import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
    margin-top: 2vh;
    margin-right: 1vw;
    margin-left: auto;
    opacity: 0.6;
`;
const IconDiv = () => {
    return (
        <Div>
            <Link to="..">
                <img src={`${process.env.PUBLIC_URL}/img/home.svg`} alt="홈으로 가기" />
            </Link>
            <Link to="/nav/mypage">
                <img src={`${process.env.PUBLIC_URL}/img/cogOutline.svg`} alt="마이 페이지" />
            </Link>
        </Div>
    );
};

export default IconDiv;
