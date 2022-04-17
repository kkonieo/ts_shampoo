import styled from 'styled-components';
import { ButtonProps } from 'ButtonModule';


const Button = ({ type, text, className, width, height }: ButtonProps): JSX.Element => {

    return (
        <StyledButton
            type={type}
            className={className}
            width={width}
            height={height} >
            {text}
        </StyledButton>
    );
};

export { Button };

// styled-components

const StyledButton = styled.button<{
    className: string;
    width?: string;
    height?: string;
}>`
    display: inline-block;

    width: ${props => props.width ? props.width : '120px'};
    height: ${props => props.height ? props.height : '40px'};

    text-align: center;
    color: ${props => props.className === 'blue' ? props.theme.color.sub : props.theme.color.buttonText};
    font-family: 'AppleSDGothicNeo', 'sans-serif';

    background-color: ${props => props.className === 'blue' ? props.theme.color.main : props.theme.color.buttonBackground};

    border: ${props => props.className === 'gray' && `1px solid ${props.theme.color.background}`};
    border-radius: 9999px;

    cursor: pointer;
`;