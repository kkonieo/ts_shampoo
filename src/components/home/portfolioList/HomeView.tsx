import { useCallback, useRef, useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { HomeProps } from 'HomeModule';
import { Portfolio } from './HomeView/Portfolio';
import { MoreButton } from './HomeView/MoreButton';
import { SearchBar } from './HomeView/SearchBar';
import { useRecoilValue } from 'recoil';
import { userInfoData } from '../../../utils/data/atom';

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

    // filter 선택한 항목들 UI 나타내는 컴포넌트
    const selectedFilterMemo = useMemo(() => {
        return selectedFilter.map((item, idx): JSX.Element => {
            return (
                <FilterItems key={idx}>
                    {item}
                    <CloseButton>
                        <img
                            alt="close button"
                            src={`${process.env.PUBLIC_URL}/img/close.svg`}
                            onClick={() => {
                                setSelectedFilter((current) => {
                                    let newSelectedFilter = [...current];
                                    const idx = newSelectedFilter.indexOf(item);
                                    newSelectedFilter.splice(idx, 1);
                                    return newSelectedFilter;
                                });
                            }}
                        />
                    </CloseButton>
                </FilterItems>
            );
        });
    }, [selectedFilter]);

    // filter 에서 외부를 클릭했을시, filter form이 사라지게 하는 로직
    const onLeaveFocusFilter = useCallback((e) => {
        if (!filterBox.current) return;
        if (!filterBox.current.contains(e.target)) {
            setPositionActive(false);
        }
    }, []);

    return (
        <PortfolioListSection onClick={onLeaveFocusFilter}>
            <PortfolioListContainerDiv>
                {/* searchBar */}
                <SearchBar
                    filterBox={filterBox}
                    positionActive={positionActive}
                    setPositionActive={setPositionActive}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                    setUserPortfolio={setUserPortfolio}
                    setPortfolioCount={setPortfolioCount}
                />
                {/* Selected filter list */}
                <FiltersListDiv>{selectedFilterMemo}</FiltersListDiv>
                {/* Portfolio List */}
                <UserPortfolioListDiv>
                    {userPortfolio.filter((item, idx) => {
                        if (idx < portfolioCount) return item;
                    })}
                </UserPortfolioListDiv>
                {userPortfolio.length === 0 && <p>검색결과가 없습니다</p>}
                {/* More button */}
                <MoreButton
                    portfolioCount={portfolioCount}
                    setPortfolioCount={setPortfolioCount}
                    userPortfolio={userPortfolio}
                />
            </PortfolioListContainerDiv>
        </PortfolioListSection>
    );
};

const PortfolioListSection = styled.section`
    position: relative;
`;
const PortfolioListContainerDiv = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-top: 24px;
`;
const FiltersListDiv = styled.div`
    margin-bottom: 28px;
`;

const FilterItems = styled.div`
    height: 36px;
    border: 1px solid ${(props) => props.theme.color.background};
    border-radius: 4px;
    padding: 10px;
    margin-top: 8px;
    margin-left: 12px;
    color: ${(props) => props.theme.color.buttonText};
    display: inline-flex;
    align-items: center;
`;
const CloseButton = styled.button`
    margin-left: 8px;
    padding-top: 2px;
    box-sizing: border-box;
`;
const UserPortfolioListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: flex-start;
`;
