import { useCallback, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { HomeProps } from 'HomeModule';
import { Portfolio } from './HomeView/Portfolio';
import { MoreButton } from './HomeView/MoreButton';
import { SearchBar } from './HomeView/SearchBar';
import { useRecoilValue } from 'recoil';
import { userInfoData } from '../../../utils/data/atom';
import { FilterList } from './FilterList';
import { UserPortfolioList } from './UserPortfolioList';

export const HomeView = () => {
    const [positionActive, setPositionActive] = useState<boolean>(false);
    const [portfolioCount, setPortfolioCount] = useState<number>(10);
    const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
    const [userPortfolio, setUserPortfolio] = useState<JSX.Element[]>([]);

    const userInfo = useRecoilValue(userInfoData);

    useEffect(() => {
        userInfo.length > 0 &&
            setUserPortfolio(
                userInfo.map((item: HomeProps.UserInfoProps, idx: number) => {
                    return <Portfolio key={idx} {...item} />;
                }),
            );
    }, [userInfo]);

    // filter form 구현하는 로직
    const filterBox: any = useRef(null);

    // filter 에서 외부를 클릭했을시, filter form이 사라지게 하는 로직
    const onLeaveFocusFilter = useCallback((e) => {
        if (!filterBox.current) return;
        if (!filterBox.current.contains(e.target)) {
            setPositionActive(false);
        }
    }, []);

    return (
        <HomeSection onClick={onLeaveFocusFilter}>
            <HomeContainerDiv>
                <SearchBar
                    filterBox={filterBox}
                    positionActive={positionActive}
                    setPositionActive={setPositionActive}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                    setUserPortfolio={setUserPortfolio}
                    setPortfolioCount={setPortfolioCount}
                />
                <FilterList selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
                <UserPortfolioList userPortfolio={userPortfolio} portfolioCount={portfolioCount} />
                <MoreButton
                    portfolioCount={portfolioCount}
                    setPortfolioCount={setPortfolioCount}
                    userPortfolio={userPortfolio}
                />
            </HomeContainerDiv>
        </HomeSection>
    );
};

const HomeSection = styled.section`
    position: relative;
`;
const HomeContainerDiv = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-top: 24px;
`;
