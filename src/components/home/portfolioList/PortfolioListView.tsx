import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PortfolioListSection = styled.section`
    min-width: 80vw;
    margin: 0 auto;
    margin-top: 24px;
    position: relative;
`;
const FilterDiv = styled.div`
    display: flex;
    height: 36px;
    margin-bottom: 20px;
    padding: 0 40px;
`;

const FilterButton = styled.button`
    height: 36px;
    border: 1px solid #e0e0e0;
    padding: 10px;
    position: relative;
    color: #757575;
    border-radius: 4px;
`;
const FilterForm = styled.form`
    width: 300px;
    height: 140px;
    position: absolute;
    bottom: -140px;
    left: 0;
    background-color: #f5f5f5;
`;
const FilterIntput = styled.input`
    margin-top: 60px;
    width: 260px;
    height: 40px;
    border-radius: 9999px;
`;
const FilterCloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
`;
const FilterItems = styled.button`
    height: 36px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 10px;
    margin-left: 8px;
    color: #757575;
`;

const UserPortfolioListDiv = styled.div`
    /* border: 2px solid blue; */
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    /* HACK: 정렬을 어떤식으로 하면 좋을지 */
    justify-content: center;
`;
const PortfolioLink = styled(Link)`
    border: 1px solid #e0e0e0;
    width: 30%;
    height: 260px;
    border-radius: 10px;
    margin: 1%;
    display: flex;
    flex-basis: 260px;
    flex-direction: column;
    text-decoration: none;
    color: #3a3a3a;
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
const MoreDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 100px;
`;
const MoreButton = styled.button`
    width: 120px;
    height: 48px;
    color: #fff;
    background-color: #5993f6;
    display: inline-block;
    border: 1px solid #e0e0e0;
    border-radius: 9999px;
`;

interface UserInfoProps {
    name: string;
    job: string;
}
export const PortfolioListView = ({ userInfo }: { userInfo: Array<UserInfoProps> }) => {
    const [filterActive, setFilterActive] = useState<boolean>(false);

    // Portfolio 카드 컴포넌트
    const Portfolio = ({ name, job }: UserInfoProps): JSX.Element => {
        return (
            <PortfolioLink to="#">
                <PortfolioTitleDiv>
                    <PortfolioName>{name}</PortfolioName>
                    <PortfolioJob>{job}</PortfolioJob>
                </PortfolioTitleDiv>
            </PortfolioLink>
        );
    };

    // TODO: filter 구현하기
    const Filter = (): JSX.Element => {
        return (
            <FilterForm>
                <label>
                    <FilterIntput type="text" />
                </label>
                <FilterCloseButton
                    onClick={() => {
                        setFilterActive(false);
                    }}
                >
                    닫기
                </FilterCloseButton>
            </FilterForm>
        );
    };

    let UserPortfolioList: JSX.Element[] = userInfo.map((item: UserInfoProps) => {
        return <Portfolio {...item} />;
    });

    return (
        <PortfolioListSection>
            <FilterDiv>
                <FilterButton
                    onClick={() => {
                        setFilterActive(true);
                    }}
                >
                    필터
                    {filterActive && <Filter />}
                </FilterButton>
                {/* TODO: filter를 어떤식으로 만들건지 */}
                <FilterItems># 프론트엔드 개발자</FilterItems>
                <FilterItems># 백엔드 개발자</FilterItems>
            </FilterDiv>
            <UserPortfolioListDiv>{UserPortfolioList}</UserPortfolioListDiv>
            <MoreDiv>
                <MoreButton>더보기</MoreButton>
            </MoreDiv>
        </PortfolioListSection>
    );
};
