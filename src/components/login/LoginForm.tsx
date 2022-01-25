import styled from 'styled-components';

// 아이디, 비밀번호 입력창
const LoginInput = styled.input`
    all: unset;

    display: block;

    padding: 10px;
    margin: 5px 0;

    width: 300px;

    border-color: #E0E0E0;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;

    &::placeholder {
        font-size: 0.8rem;
    }
`;

// 폼 전체 감싸는 태그
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export { LoginInput, Form }