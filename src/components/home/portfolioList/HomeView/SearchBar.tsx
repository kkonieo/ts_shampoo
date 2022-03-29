import styled from 'styled-components';
import { useState } from 'react';
import { HomeProps } from 'HomeModule';
import { Portfolio } from './Portfolio';
import { useRecoilValue } from 'recoil';
import { userInfoData, positionsData } from '../../../../utils/data/atom';
import { Filter } from './Filter';

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
    const [searchValue, setSearchValue] = useState<string>('');

    const userInfo = useRecoilValue(userInfoData);
    const positions = useRecoilValue(positionsData);

    const handleSearchSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const filteredUserInfo: Array<HomeProps.UserInfoProps> = userInfo.filter((item) => {
            if (selectedFilter.length === 0) return item;
            else if (selectedFilter.indexOf(item.job) >= 0) return item;
        });
        const searchUserInfo: Array<HomeProps.UserInfoProps> = filteredUserInfo.filter((item) => {
            if (searchValue === item.name) return item;
            if (searchValue.toLowerCase() === item.user_skill.toLowerCase()) return item;
        });
        if (selectedFilter.length > 0) {
            if (searchValue !== '' && searchUserInfo.length === 0) {
                setUserPortfolio([]);
            } else if (searchValue !== '' && searchUserInfo.length > 0) {
                setUserPortfolio(
                    searchUserInfo.map((item: HomeProps.UserInfoProps, idx: number) => {
                        return <Portfolio key={idx} {...item} />;
                    }),
                );
            } else if (searchValue === '') {
                setUserPortfolio(
                    filteredUserInfo.map((item: HomeProps.UserInfoProps, idx: number) => {
                        return <Portfolio key={idx} {...item} />;
                    }),
                );
            }
        } else if (selectedFilter.length === 0) {
            if (searchValue !== '' && searchUserInfo.length > 0) {
                setUserPortfolio(
                    searchUserInfo.map((item: HomeProps.UserInfoProps, idx: number) => {
                        return <Portfolio key={idx} {...item} />;
                    }),
                );
            } else if (searchValue !== '' && searchUserInfo.length === 0) {
                setUserPortfolio([]);
            } else if (searchValue === '') {
                setUserPortfolio(
                    filteredUserInfo.map((item: HomeProps.UserInfoProps, idx: number) => {
                        return <Portfolio key={idx} {...item} />;
                    }),
                );
            }
        }
    };

    return (
        <SearchDiv>
            {/* Position */}
            <FilterPositionDiv>
                <FilterButton
                    onClick={() => {
                        positionActive ? setPositionActive(false) : setPositionActive(true);
                    }}
                    isActive={positionActive}
                >
                    직군
                </FilterButton>
                {positionActive && (
                    <Filter
                        data={positions}
                        filterBox={filterBox}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                    />
                )}
            </FilterPositionDiv>
            <SearchForm onSubmit={handleSearchSubmit}>
                <SearchInput
                    type="text"
                    placeholder="찾고싶은 이름, 기술 스택으로 포트폴리오를 검색해보세요!"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                ></SearchInput>
                <SearchImg alt="search button" src={`${process.env.PUBLIC_URL}/img/search.svg`} />
                <SearchButton type="submit">검색</SearchButton>
                <ResetButton
                    type="button"
                    onClick={() => {
                        setPortfolioCount(10);
                        setSearchValue('');
                        setSelectedFilter([]);
                        setUserPortfolio(
                            userInfo.map((item: HomeProps.UserInfoProps, idx: number) => {
                                return <Portfolio key={idx} {...item} />;
                            }),
                        );
                    }}
                >
                    필터 초기화
                </ResetButton>
            </SearchForm>
        </SearchDiv>
    );
};

const SearchDiv = styled.div`
    display: flex;
    height: 36px;
    margin-bottom: 12px;
`;
const FilterPositionDiv = styled.div`
    width: 30%;
    position: relative;
    box-sizing: border-box;
    padding-right: 20px;
`;
const SearchForm = styled.form`
    box-sizing: border-box;
    width: 70%;
    position: relative;
`;
const SearchInput = styled.input`
    width: 70%;
    height: 44px;
    border: 1px solid ${(props) => props.theme.color.background};
    border-radius: 4px;
    padding-left: 48px;
`;
const SearchImg = styled.img`
    position: absolute;
    top: 12px;
    left: 12px;
`;
const SearchButton = styled.button`
    width: 11%;
    height: 44px;
    margin-left: 2%;
    background-color: ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.sub};
    border-radius: 4px;

    &:hover {
        opacity: 0.8;
    }
`;
const ResetButton = styled.button`
    width: 14%;
    height: 44px;
    margin-left: 2%;
    background-color: ${(props) => props.theme.color.sub};
    color: ${(props) => props.theme.color.main};
    border: 1px solid ${(props) => props.theme.color.main};
    border-radius: 4px;

    &:hover {
        opacity: 0.7;
    }
`;
const FilterButton = styled.button<HomeProps.IFilterProps>`
    width: 100%;
    height: 44px;
    border: 1px solid #e0e0e0;
    padding: 10px;
    color: ${(props) => (props.isActive ? props.theme.color.defaultText : props.theme.color.buttonText)};
    border-radius: 4px;
    font-size: 16px;
    text-align: left;
    background-color: ${(props) => (props.isActive ? props.theme.color.buttonBackground : props.theme.color.sub)};

    &:hover {
        color: ${(props) => props.theme.color.defaultText};
        background-color: ${(props) => props.theme.color.buttonBackground};
    }
`;
