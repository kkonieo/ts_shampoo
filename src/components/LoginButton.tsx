import styled from 'styled-components';
import { navTheme } from '../utils/styles/theme';

// props로 버튼 컬러와 내부 텍스트 받기
interface Props {
    color: string;
    text: string;
};

const LoginButton = ({ color, text }: Props) => {

    return (
        <Button type="submit" color={color} text={text} >{text}</Button>
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

    background-color: ${ props => props.color === "main" ? navTheme.color.main : navTheme.color.background };

    cursor: pointer;
`;