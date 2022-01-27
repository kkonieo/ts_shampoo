import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { LoginContainerProps } from 'LoginContainer';

const LoginContainer: React.FC<LoginContainerProps> = ({ children }) => {

    // 폼 배경 사이즈 조절을 위한 pathname 추출
    const location = useLocation();
    const pathname: string = location.pathname;

    return (
        <ContainerArticle>
            <FormDiv pathname={pathname}>
                { children }
            </FormDiv>
        </ContainerArticle>
    );
};

export default LoginContainer;

// styled-components

// 배경 div
const ContainerArticle = styled.article`
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

    @media (max-width: ${props => props.pathname === '/login' ? '450px' : '800px'}) {
    width: 90%;
    }

    @media (max-height: 500px) {
    height: 90%;
    }
`;