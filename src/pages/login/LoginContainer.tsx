import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { LoginSpace } from 'LoginModule';

const LoginContainer: React.FC<LoginSpace.LoginContainerProps> = ({ children }) => {

    // 폼 배경 사이즈 조절을 위한 pathname 추출
    const location = useLocation();
    const pathname: string = location.pathname;

    return (
        <ContainerArticle>
            <FormDiv pathname={pathname}>
                {children}
            </FormDiv>
        </ContainerArticle>
    );
};

export { LoginContainer };

// styled-components

// 배경 div
export const ContainerArticle = styled.article`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #F5F5F5;
`;

// 흰색 배경 div
const FormDiv = styled.div<{ pathname: string }>`
    background-color: white;

    width: ${props => props.pathname === '/login' ? '29.2vw' : '52vw'};
    height: 66.4vh;

    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;