import styled from 'styled-components';

const LinkDiv: React.FC = (props) => {
    return <Div>{props.children}</Div>;
};

export default LinkDiv;

const Div = styled.div`
    justify-content: start;
    font-family: 'Montserrat';
    border: none;
    button {
        margin: 5% 0;
        margin-right: 5%;
        width: 10em;
        background-color: ${(props) => props.theme.color.background};
        border-radius: 15px;
        border: none;
        font-weight: bold;
        height: 3em;
    }
`;
