import styled from 'styled-components';
import { FilterPosition } from './FilterPosition';
import { Search } from './Search';

export const SearchBar = ({
    filterBox,
    positionActive,
    setPositionActive,
    selectedFilter,
    setSelectedFilter,
    setUserPortfolio,
    setPortfolioCount,
}: {
    positionActive: boolean;
    filterBox: any;
    setPositionActive: React.Dispatch<React.SetStateAction<boolean>>;
    selectedFilter: string[];
    setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>;
    setUserPortfolio: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
    setPortfolioCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
        <SearchDiv>
            <FilterPosition
                filterBox={filterBox}
                positionActive={positionActive}
                setPositionActive={setPositionActive}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            />
            <Search
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                setUserPortfolio={setUserPortfolio}
                setPortfolioCount={setPortfolioCount}
            />
        </SearchDiv>
    );
};

const SearchDiv = styled.div`
    display: flex;
    height: 36px;
    margin-bottom: 12px;
`;
