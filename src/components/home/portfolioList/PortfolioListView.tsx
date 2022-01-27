import { useCallback, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HomeProps } from 'HomeModule';

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
    const [stackActive, setStackActive] = useState<boolean>(false);
    const [portfolioCount, setPortfolioCount] = useState<number>(8);
    const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');

    // Portfolio 카드 컴포넌트
    const Portfolio = ({ name, position }: HomeProps.UserInfoProps): JSX.Element => {
        return (
            <PortfolioLink to="#">
                <PortfolioTitleDiv>
                    <PortfolioName>{name}</PortfolioName>
                    <PortfolioJob>{position}</PortfolioJob>
                </PortfolioTitleDiv>
            </PortfolioLink>
        );
    };

    // userInfo = 모든 회원의 포트폴리오 정보가 들어있는 배열
    // filteredUserInfo = 모든 회원 정보에서 필터에 해당하는 회원의 포트폴리오 정보가 들어있는 배열
    // searchUserInfo = 모든 회원 정보에서 검색 결과에 해당하는 회원의 포트폴리오 정보가 들어있는 배열
    // reaultUserInfo = 검색결과와 필터에서 검색결과를 우선시해서 보여주는 로직
    // UserPortfolioList = 모든 회원의 포트폴리오를 보여주는 컴포넌트가 들어있는 배열
    let filteredUserInfo: Array<HomeProps.UserInfoProps> = userInfo.filter((item) => {
        if (selectedFilter.length === 0) return item;
        else if (selectedFilter.indexOf(item.position) >= 0 || selectedFilter.indexOf(item.stack) >= 0) return item;
    });
    let searchUserInfo: Array<HomeProps.UserInfoProps> = userInfo.filter((item) => {
        if (searchValue === item.name) return item;
    });
    let resultUserInfo = searchUserInfo.length > 0 ? searchUserInfo : filteredUserInfo;
    let UserPortfolioList: JSX.Element[] = resultUserInfo.map((item: HomeProps.UserInfoProps, idx) => {
        return <Portfolio key={idx} {...item} />;
    });

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
        } else {
            setSelectedFilter((current) => {
                let newSelectedFilter = [...current];
                const idx = newSelectedFilter.indexOf(value);
                newSelectedFilter.splice(idx, 1);
                return newSelectedFilter;
            });
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
            setStackActive(false);
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
                    {/* Stack */}
                    <FilterStackDiv>
                        <FilterButton
                            onClick={() => {
                                stackActive ? setStackActive(false) : setStackActive(true);
                            }}
                            isActive={stackActive}
                        >
                            기술 스택
                        </FilterButton>
                        {stackActive && <Filter data={stacks} />}
                    </FilterStackDiv>
                    <SearchForm>
                        <SearchInput
                            type="text"
                            placeholder="궁금한 포트폴리오가 있다면 검색해보세요!"
                            value-={searchValue}
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                        ></SearchInput>
                        <SearchImg alt="search button" src={`${process.env.PUBLIC_URL}/img/search.svg`} />
                    </SearchForm>
                </FilterDiv>
                {/* Selected filter list */}
                <FiltersListDiv>{selectedFilterMemo}</FiltersListDiv>
                {/* Portfolio List */}
                <UserPortfolioListDiv>
                    {UserPortfolioList.filter((item, idx) => {
                        if (idx < portfolioCount) return item;
                    })}
                </UserPortfolioListDiv>
                {/* MORE Button */}
                <MoreDiv>
                    {UserPortfolioList.length >= portfolioCount && (
                        <MoreButton
                            onClick={() => {
                                setPortfolioCount((cur) => {
                                    return cur + 8;
                                });
                            }}
                        >
                            더보기
                        </MoreButton>
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
    padding: 0 36px;
`;
const FilterPositionDiv = styled.div`
    width: 33.333%;
    position: relative;
    box-sizing: border-box;
    padding-right: 20px;
`;
const FilterStackDiv = styled.div`
    width: 33.333%;
    position: relative;
    box-sizing: border-box;
    padding-right: 20px;
`;
const SearchForm = styled.form`
    box-sizing: border-box;
    width: 33.333%;
    position: relative;
`;
const SearchInput = styled.input`
    width: 100%;
    height: 44px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding-left: 48px;
`;
const SearchImg = styled.img`
    position: absolute;
    top: 12px;
    left: 12px;
`;
const FilterButton = styled.button<HomeProps.IFilterProps>`
    width: 100%;
    height: 44px;
    border: 1px solid #e0e0e0;
    padding: 10px;
    color: ${(props) => (props.isActive ? '#3a3a3a' : '#757575')};
    border-radius: 4px;
    text-align: left;
    background-color: ${(props) => (props.isActive ? '#f5f5f5' : '#fff')};

    &:hover {
        color: #3a3a3a;
        background-color: #f5f5f5;
    }
`;
const InputDiv = styled.div`
    margin: 6px 8px;
    font-size: 16px;
`;
const FilterInput = styled.input`
    margin-right: 8px;
    cursor: pointer;
    border: 2px solid blue;

    &:hover {
        background-color: #5993f6;
    }
`;
const FilterLabel = styled.label`
    cursor: pointer;
    &:hover {
        color: #5993f6;
    }
`;
const FilterContainerForm = styled.form`
    width: 95%;
    height: 400px;
    position: absolute;
    bottom: -400px;
    left: 0;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 8px rgb(0, 0, 0, 0.1);
    z-index: 2;
`;
const FiltersListDiv = styled.div`
    margin-bottom: 20px;
    padding: 0 36px;
`;

const FilterItems = styled.div`
    height: 36px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 10px;
    margin-top: 8px;
    margin-left: 12px;
    margin-bottom: 8px;
    color: #757575;
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
    /* HACK: 정렬을 어떤식으로 하면 좋을지 */
    /* justify-content: center; */
`;
const PortfolioLink = styled(Link)`
    border: 1px solid #e0e0e0;
    width: 30%;
    height: 260px;
    border-radius: 10px;
    margin: 1%;
    display: inline-flex;
    flex-basis: 260px;
    flex-direction: column;
    text-decoration: none;
    color: #3a3a3a;
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover {
        transform: translateY(-8px);
    }
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
