import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {HomeProps} from 'HomeModule';

const PortfolioListSection = styled.section`
    position: relative;
`;
const PortfolioListContainerDiv = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 24px;
`;
const FilterDiv = styled.div`
    display: flex;
    height: 36px;
    margin-bottom: 12px;
    padding: 0 20px;
`;
const FilterPositionDiv = styled.div`
    position: relative;
`;
const FilterButton = styled.button`
    width: 280px;
    height: 44px;
    border: 1px solid #e0e0e0;
    padding: 10px;
    margin-left: 12px;
    color: #757575;
    border-radius: 4px;
    text-align: left;
`;
const InputDiv = styled.div`
    margin: 6px 8px;
    font-size: 16px;
`;
const FilterInput = styled.input`
    margin-right: 8px;
`;
const FilterLabel = styled.label``;
const FilterContainerForm = styled.form`
    width: 280px;
    height: 400px;
    position: absolute;
    bottom: -400px;
    left: 0;
    margin-left: 12px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 8px rgb(0, 0, 0, 0.1);
`;
const FilterStackDiv = styled.div`
    position: relative;
`;

const FilterItems = styled.div`
    height: 44px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 10px;
    margin-left: 8px;
    color: #757575;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const CloseButton = styled.button`
    /* border: 2px solid blue; */
    padding-left: 6px;
`;

const UserPortfolioListDiv = styled.div`
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

    &:hover {
        box-shadow: 2px 6px 10px rgb(0, 0, 0, 0.1);
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

export const PortfolioListView = ({
    userInfo,
    positions,
    stacks,
}: {
    userInfo: Array<HomeProps.UserInfoProps>;
    positions: Array<string>;
    stacks: Array<string>;
}) => {
    const [positionActive, setPositionActive] = useState<boolean>(true);
    const [stackActive, setStackActive] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState<string[]>(['test', 'test1']);

    // Portfolio 카드 컴포넌트
    const Portfolio = ({ name, job }: HomeProps.UserInfoProps): JSX.Element => {
        return (
            <PortfolioLink to="#">
                <PortfolioTitleDiv>
                    <PortfolioName>{name}</PortfolioName>
                    <PortfolioJob>{job}</PortfolioJob>
                </PortfolioTitleDiv>
            </PortfolioLink>
        );
    };

    let UserPortfolioList: JSX.Element[] = userInfo.map((item: HomeProps.UserInfoProps, idx) => {
        return <Portfolio key={idx} {...item} />;
    });

    // TODO: filter 구현하기
    const filterBox: any = useRef(null);
    const Filter = ({ data, type }: { data: Array<string>; type: string }): JSX.Element => {
        const dataList = data.map((item, idx) => {
            return (
                <InputDiv key={idx}>
                    <FilterInput type="checkbox" value={item} id={item} />
                    <FilterLabel htmlFor={item}>{item}</FilterLabel>
                </InputDiv>
            );
        });
        return (
            <FilterContainerForm ref={filterBox}>
                <div>{dataList}</div>
            </FilterContainerForm>
        );
    };

    // filter 에서 외부를 클릭했을시, filter form이 사라지게 하는 로직
    const onLeaveFocusFilter = useCallback((e) => {
        if (!filterBox.current) return;
        if (!filterBox.current.contains(e.target)) {
            setPositionActive(false);
            setStackActive(false);
        }
    }, []);

    // filter 선택한 스택들 UI 나타내는 컴포넌트
    const selectedFilterList = selectedFilter.map((item, idx) => {
        return (
            <FilterItems key={idx}>
                {item}
                <CloseButton>
                    <img alt="close button" src={`${process.env.PUBLIC_URL}/img/close.svg`} />
                </CloseButton>
            </FilterItems>
        );
    });

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
                        >
                            직군
                        </FilterButton>
                        {positionActive && <Filter data={positions} type="position" />}
                    </FilterPositionDiv>
                    {/* Stack */}
                    <FilterStackDiv>
                        <FilterButton
                            onClick={() => {
                                stackActive ? setStackActive(false) : setStackActive(true);
                            }}
                        >
                            기술 스택
                        </FilterButton>
                        {stackActive && <Filter data={stacks} type="stack" />}
                    </FilterStackDiv>
                    <br />
                    {/* Selected filter list */}
                    {selectedFilter && selectedFilterList}
                </FilterDiv>
                {/* Portfolio List */}
                <UserPortfolioListDiv>{UserPortfolioList}</UserPortfolioListDiv>
                {/* MORE Button */}
                <MoreDiv>
                    <MoreButton>더보기</MoreButton>
                </MoreDiv>
            </PortfolioListContainerDiv>
        </PortfolioListSection>
    );
};
