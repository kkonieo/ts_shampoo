import styled from 'styled-components';

interface Props {
    key: string;
};

const Login: React.FC<Props> = ({ key }) => {
    return (
        <ContainerDiv>
            <p>EliceFolio</p>
            <form>
                <input />
                <input />
            </form>
        </ContainerDiv>
    );
};

export default Login;

// styled-components
const ContainerDiv = styled.div`
    background-color: white;

    width: 400px;
    height: 410px;

    border-radius: 20px;

    margin: auto;
`;