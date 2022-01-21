import styled from 'styled-components';

interface Props {
    key?: string;
};

const LoginButton: React.FC<Props> = ({ key }) => {
    // console.log(theme);
    return (
        <Button type="submit">로그인</Button>
    );
};

export default LoginButton;

// styled-components

const Button = styled.button<Props>`
    all: unset;

    display: block;

    width: 300px;

    margin: 10px 0;
    padding: 10px;

    border-radius: 50px;

    text-align: center;
    color: white;
    background-color: #5993F6;
`;