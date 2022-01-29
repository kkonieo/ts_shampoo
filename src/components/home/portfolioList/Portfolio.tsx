import { HomeProps } from 'HomeModule';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Portfolio 카드 컴포넌트
export const Portfolio = ({ name, position, stack }: HomeProps.UserInfoProps): JSX.Element => {
    return (
        <PortfolioLink to="#">
            <PortfolioTitleDiv>
                <PortfolioName>{name}</PortfolioName>
                <PortfolioJob>{position}</PortfolioJob>
                <PortfolioJob>{stack}</PortfolioJob>
            </PortfolioTitleDiv>
        </PortfolioLink>
    );
};

const PortfolioLink = styled(Link)`
    border: 1px solid #e0e0e0;
    height: 260px;
    border-radius: 10px;
    display: inline-flex;
    flex-basis: 23%;
    flex-direction: column;
    text-decoration: none;
    color: #3a3a3a;
    transition-duration: 0.3s;
    transition-property: transform;
    margin: 0 1%;
    margin-bottom: 20px;

    &:hover {
        transform: translateY(-8px);
    }
`;

const PortfolioTitleDiv = styled.div`
    width: 100%;
    height: 60px;
    background-color: #f5f5f5;
    margin-top: auto;
    padding: 12px;
    border-radius: 0 0 10px 10px;
`;
const PortfolioName = styled.p`
    font-weight: bold;
    margin-bottom: 2px;
`;
const PortfolioJob = styled.p``;
