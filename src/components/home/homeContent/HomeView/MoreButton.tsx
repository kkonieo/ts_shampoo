import styled from 'styled-components';
import { Button } from '../../..';

export const MoreButton = ({
    portfolioCount,
    setPortfolioCount,
    userPortfolio,
}: {
    portfolioCount: number;
    setPortfolioCount: React.Dispatch<React.SetStateAction<number>>;
    userPortfolio: JSX.Element[];
}) => {
    return (
        <MoreDiv
            onClick={() => {
                setPortfolioCount((current) => {
                    return current + 10;
                });
            }}
        >
            {userPortfolio.length >= portfolioCount && (
                <Button className="blue" width="120px" height="48px" text="더보기" type="button" />
            )}
        </MoreDiv>
    );
};
const MoreDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 100px;
    &:hover {
        opacity: 0.8;
    }
`;
