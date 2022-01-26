import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { LoginContainerProps } from 'LoginContainer';

const LoginContainer: React.FC<LoginContainerProps> = ({ children }) => {

    // 폼 배경 사이즈 조절을 위한 pathname 추출
    const location = useLocation();
    const pathname: string = location.pathname;

    return (
        <ContainerDiv>
            <FormDiv pathname={pathname}>
                { children }
            </FormDiv>
        </ContainerDiv>
    );
};

export default LoginContainer;

// styled-components

// 배경 div
const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #F5F5F5;
`;

// 흰색 배경 div
const FormDiv = styled.div<{pathname: string}>`
    background-color: white;

    width: ${props => props.pathname === '/login' ? '450px' : '800px'};
    height: 500px;

    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 450px) {
    width: 90%;
    }

    @media screen and (max-height: 500px) {
    height: 90%;
    }
`;