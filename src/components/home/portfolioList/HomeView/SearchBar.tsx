import styled from 'styled-components';
import { useState } from 'react';
import { HomeProps } from 'HomeModule';
import { UserSpace } from 'InformationModule';
import { Portfolio } from './Portfolio';
import { useRecoilValue } from 'recoil';
import { userInfoData, positionsData } from '../../../../utils/data/atom';

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

    // 직군, 기술스택의 checkbox창 만드는 로직
    const Filter = ({ data }: { data: Array<UserSpace.Job> }): JSX.Element => {
        return (
            <FilterContainerForm ref={filterBox}>
                <div>
                    {data.length > 0 &&
                        data.map((item, idx) => {
                            return (
                                <InputDiv key={idx}>
                                    <FilterInput
                                        type="checkbox"
                                        value={item.name}
                                        id={item.name}
                                        onChange={addFilter}
                                        checked={selectedFilter.indexOf(item.name) >= 0}
                                    />
                                    <FilterLabel htmlFor={item.name}>{item.name}</FilterLabel>
                                </InputDiv>
                            );
                        })}
                </div>
            </FilterContainerForm>
        );
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
