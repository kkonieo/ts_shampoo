import styled from 'styled-components';

export const Members = ({ text }: { text: string }) => {
    return <Member>{text}</Member>;
};

const Member = styled.div`
    width: 235px;
    height: 235px;
    border: 1px solid;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px 11px;
    cursor: pointer;
`;
