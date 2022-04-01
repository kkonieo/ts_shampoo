import styled from 'styled-components';
import { useState } from 'react';
import { HomeProps } from 'HomeModule';
import { Portfolio } from './Portfolio';
import { useRecoilValue } from 'recoil';
import { userInfoData } from '../../../../utils/data/atom';
// import { RelatedResultBox } from './RelatedResultBox';

export const Search = ({
    selectedFilter,
    setSelectedFilter,
    setUserPortfolio,
    setPortfolioCount,
}: {
    selectedFilter: string[];
    setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>;
    setUserPortfolio: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
    setPortfolioCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [isRelatedResult, setIsRelatedResult] = useState(false);

    const userInfo = useRecoilValue(userInfoData);

    // 검색 로직
    const handleSearchSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        // 필터 선택시 해당 하는 유저 정보
        const filteredUserInfo: Array<HomeProps.UserInfoProps> = userInfo.filter((item) => {
            if (selectedFilter.length === 0) return item;
            else if (selectedFilter.indexOf(item.job) >= 0) return item;
        });
        // 검색 기능 이용 시 해당 하는 유저 정보
        const searchUserInfo: Array<HomeProps.UserInfoProps> = filteredUserInfo.filter((item) => {
            if (searchValue === item.name) return item;
            if (searchValue.toLowerCase() === item.user_skill.toLowerCase()) return item;
        });

        // 필터를 선택한 경우
        if (selectedFilter.length > 0) {
            // 검색 기능 이용 시 해당하는 유저가 없는 경우
            if (searchValue !== '' && searchUserInfo.length === 0) {
                setUserPortfolio([]);
                // 검색 기능 이용 시 헤딩하는 유저가 있는 경우
            } else if (searchValue !== '' && searchUserInfo.length > 0) {
                setUserPortfolio(
                    searchUserInfo.map((item: HomeProps.UserInfoProps, idx: number) => {
                        return <Portfolio key={idx} {...item} />;
                    }),
                );
                // 검색 기능 이용하지 않은 경우
            } else if (searchValue === '') {
                setUserPortfolio(
                    filteredUserInfo.map((item: HomeProps.UserInfoProps, idx: number) => {
                        return <Portfolio key={idx} {...item} />;
                    }),
                );
            }
            // 필터를 선택하지 않은 경우
        } else if (selectedFilter.length === 0) {
            // 검색 기능 이용 시 유저가 있는 경우
            if (searchValue !== '' && searchUserInfo.length > 0) {
                setUserPortfolio(
                    searchUserInfo.map((item: HomeProps.UserInfoProps, idx: number) => {
                        return <Portfolio key={idx} {...item} />;
                    }),
                );
                // 검색 기능 이용 시 유저가 없는 경우
            } else if (searchValue !== '' && searchUserInfo.length === 0) {
                setUserPortfolio([]);
                // 검색 기능도 이용하지 않은 경우
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
        <SearchForm onSubmit={handleSearchSubmit}>
            <SearchInput
                type="text"
                placeholder="찾고싶은 이름, 기술 스택으로 포트폴리오를 검색해보세요!"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
            />
            {/* <RelatedResultBox
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                isRelatedResult={isRelatedResult}
                setIsRelatedResult={setIsRelatedResult}
            /> */}
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
    );
};

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
