import styled from 'styled-components';

export const UserPortfolioList = ({
    userPortfolio,
    portfolioCount,
}: {
    userPortfolio: JSX.Element[];
    portfolioCount: number;
}) => {
    return (
        <>
            <UserPortfolioListDiv>
                {userPortfolio.filter((item, idx) => {
                    if (idx < portfolioCount) return item;
                })}
            </UserPortfolioListDiv>
            {userPortfolio.length === 0 && (
                <NoUser>
                    <img src={`${process.env.PUBLIC_URL}/img/noUser.png`} alt="noUser" />
                    <p>해당하는 유저를 찾을 수 없습니다!</p>
                </NoUser>
            )}
        </>
    );
};

const UserPortfolioListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: flex-start;
`;

const NoUser = styled.div`
    text-align: center;
    font-size: 20px;
    margin-top: 80px;
    margin-left: 40px;
    p {
        margin-top: 32px;
    }
`;
