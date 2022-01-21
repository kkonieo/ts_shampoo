import styled from 'styled-components';

// 예비용... 안해두면 자꾸 오류남 ㅡㅡ
interface Props {
    key: string;
};

const LoginButton: React.FC<Props> = ({ key }) => {
    return (
        <Button type="submit">로그인</Button>
    );
};

export default LoginButton;

// styled-components

const Button = styled.button`
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