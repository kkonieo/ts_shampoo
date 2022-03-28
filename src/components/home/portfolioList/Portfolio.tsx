import { HomeProps } from 'HomeModule';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Portfolio 카드 컴포넌트
export const Portfolio = ({ name, job, user_skill }: HomeProps.UserInfoProps): JSX.Element => {
    return (
        <PortfolioLink to="/id">
            <PortfolioTitleDiv>
                <PortfolioName>{name}</PortfolioName>
                <PortfolioJob>{job}</PortfolioJob>
                <PortfolioJob>{user_skill}</PortfolioJob>
            </PortfolioTitleDiv>
        </PortfolioLink>
    );
};

const PortfolioLink = styled(Link)`
    border: 1px solid ${(props) => props.theme.color.background};
    height: 260px;
    border-radius: 10px;
    display: inline-flex;
    flex-basis: 23%;
    flex-direction: column;
    text-decoration: none;
    color: ${(props) => props.theme.color.defaultText};
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
    height: 72px;
    background-color: ${(props) => props.theme.color.buttonBackground};
    margin-top: auto;
    padding: 12px;
    border-radius: 0 0 10px 10px;
`;
const PortfolioName = styled.p`
    font-weight: bold;
    margin-bottom: 2px;
`;
const PortfolioJob = styled.p``;
