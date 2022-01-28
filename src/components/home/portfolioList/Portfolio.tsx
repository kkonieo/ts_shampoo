import { HomeProps } from 'HomeModule';
import { PortfolioLink, PortfolioTitleDiv, PortfolioName, PortfolioJob } from './PortfolioListView';

// Portfolio 카드 컴포넌트
export const Portfolio = ({ name, position }: HomeProps.UserInfoProps): JSX.Element => {
    return (
        <PortfolioLink to="#">
            <PortfolioTitleDiv>
                <PortfolioName>{name}</PortfolioName>
                <PortfolioJob>{position}</PortfolioJob>
            </PortfolioTitleDiv>
        </PortfolioLink>
    );
};
