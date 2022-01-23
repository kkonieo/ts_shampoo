import styled from 'styled-components';
import { navTheme } from '../utils/styles/theme';
import { useNavigate } from 'react-router-dom';

// props로 버튼 컬러와 내부 텍스트 받기
interface Props {
    type: "button" | "submit";
    text: string;
    to?: string;
};

const LoginButton = ({ type, text, to }: Props) => {

    // 버튼에 따라 어느 홈페이지로 보낼지 선택!
    const navigate = useNavigate();

    function handleClick(): void {
        if (to === undefined) {
            return;
        } else {
            navigate(to);
        }
    }

    return (
        <Button type={type} text={text} onClick={handleClick} >{text}</Button>
    );
};

export { LoginButton };

// styled-components

const Button = styled.button<Props>`
    all: unset;

    display: block;

    width: 300px;

    margin: 10px 0;
    padding: 10px;

    border-radius: 50px;

    text-align: center;
    color: ${ props => props.text === "로그인" ? "white" : "#757575" };
    font-family: 'AppleSDGothicNeo', 'sans-serif';

    background-color: ${ props => props.text === "로그인" ? navTheme.color.main : navTheme.color.background };

    cursor: pointer;
`;