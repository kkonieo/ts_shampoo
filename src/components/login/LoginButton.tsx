import styled from 'styled-components';
import { LoginButtonProps } from 'LoginButton';


const LoginButton = ({ type, text, className }: LoginButtonProps) => {

    return (
        <Button type={type} className={className} >{text}</Button>
    );
};

export { LoginButton };

// styled-components

const Button = styled.button<{className: string}>`
    all: unset;

    display: block;

    width: 150px;

    padding: 10px;

    border-radius: 50px;

    text-align: center;
    color: ${ props => props.className === "blue_button" ? "white" : "#757575" };
    font-family: 'AppleSDGothicNeo', 'sans-serif';

    background-color: ${ props => props.className === 'blue_button' ? props.theme.color.main : props.theme.color.background };

    cursor: pointer;
`;