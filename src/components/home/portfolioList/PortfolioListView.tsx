import { useCallback, useRef, useState, useMemo } from 'react';
import styled from 'styled-components';
import { HomeProps } from 'HomeModule';
import { Portfolio } from './Portfolio';
import { Button } from '../..';

export const PortfolioListView = ({
    userInfo,
    positions,
    stacks,
}: {
    userInfo: Array<HomeProps.UserInfoProps>;
    positions: Array<string>;
    stacks: Array<string>;
}) => {
    const [positionActive, setPositionActive] = useState<boolean>(false);
    const [portfolioCount, setPortfolioCount] = useState<number>(8);
    const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [userPortfolio, setUserPortfolio] = useState<JSX.Element[]>(
        userInfo.map((item: HomeProps.UserInfoProps, idx: number) => {
            return <Portfolio key={idx} {...item} />;
        }),
    );
    const handleSearchSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const filteredUserInfo: Array<HomeProps.UserInfoProps> = userInfo.filter((item) => {
            if (selectedFilter.length === 0) return item;
            else if (selectedFilter.indexOf(item.position) >= 0) return item;
        });
        const searchUserInfo: Array<HomeProps.UserInfoProps> = filteredUserInfo.filter((item) => {
            if (searchValue === item.name) return item;
            if (searchValue.toLowerCase() === item.stack.toLowerCase()) return item;
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

    // 직군, 기술스택의 checkbox창 만드는 로직
    const Filter = ({ data }: { data: Array<string> }): JSX.Element => {
        return (
            <FilterContainerForm ref={filterBox}>
                <div>
                    {data.map((item, idx) => {
                        return (
                            <InputDiv key={idx}>
                                <FilterInput
                                    type="checkbox"
                                    value={item}
                                    id={item}
                                    onChange={addFilter}
                                    checked={selectedFilter.indexOf(item) >= 0}
                                />
                                <FilterLabel htmlFor={item}>{item}</FilterLabel>
                            </InputDiv>
                        );
                    })}
                </div>
            </FilterContainerForm>
        );
    };

    // filter form 구현하는 로직
    const filterBox: any = useRef(null);

    const addFilter = (e: React.SyntheticEvent) => {
        let target = e.target as HTMLInputElement;
        let value = target.value;
        if (selectedFilter.indexOf(value) < 0) {
            setSelectedFilter((current) => {
                const newFilterList = [...current, value];
                return newFilterList;
            });
        }
        if (selectedFilter.indexOf(value) >= 0) {
            setSelectedFilter((current) => {
                let newSelectedFilter = [...current];
                const idx = newSelectedFilter.indexOf(value);
                newSelectedFilter.splice(idx, 1);
                return newSelectedFilter;
            });
        }
    };

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
                {/* Filter */}
                <FilterDiv>
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
                        {positionActive && <Filter data={positions} />}
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
                                setPortfolioCount(8);
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
                </FilterDiv>
                {/* Selected filter list */}
                <FiltersListDiv>{selectedFilterMemo}</FiltersListDiv>
                {/* Portfolio List */}
                <UserPortfolioListDiv>
                    {userPortfolio.filter((item, idx) => {
                        if (idx < portfolioCount) return item;
                    })}
                </UserPortfolioListDiv>
                {userPortfolio.length === 0 && <p>검색결과가 없습니다</p>}
                {/* MORE Button */}
                <MoreDiv
                    onClick={() => {
                        setPortfolioCount((current) => {
                            return current + 8;
                        });
                    }}
                >
                    {userPortfolio.length >= portfolioCount && (
                        <Button className="blue" width="120px" height="48px" text="더보기" type="button" />
                    )}
                </MoreDiv>
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
const FilterDiv = styled.div`
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
const InputDiv = styled.div`
    margin: 6px 8px;
`;
const FilterInput = styled.input`
    margin-right: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    border: 2px solid blue;
`;
const FilterLabel = styled.label`
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.color.main};
    }
`;
const FilterContainerForm = styled.form`
    width: 95%;
    height: 400px;
    position: absolute;
    bottom: -400px;
    left: 0;
    padding: 10px;
    background-color: ${(props) => props.theme.color.sub};
    border: 1px solid ${(props) => props.theme.color.background};
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 8px rgb(0, 0, 0, 0.1);
    z-index: 2;
    overflow-y: auto;
    box-sizing: border-box;
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
const MoreDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 100px;
    &:hover {
        opacity: 0.8;
    }
`;
