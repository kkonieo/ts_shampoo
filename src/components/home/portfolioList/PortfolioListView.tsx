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

    // filter form 구현하는 로직
    const filterBox: any = useRef(null);
    const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

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
                </FilterDiv>
                {/* Selected filter list */}
                <FiltersListDiv>{selectedFilterMemo}</FiltersListDiv>
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
    padding: 0 36px;
`;
const FilterPositionDiv = styled.div`
    position: relative;
`;
const FilterStackDiv = styled.div`
    position: relative;
`;
const FilterButton = styled.button<HomeProps.IFilterProps>`
    width: 280px;
    height: 44px;
    border: 1px solid #e0e0e0;
    padding: 10px;
    margin-left: 12px;
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
    margin-left: 8px;
    margin-bottom: 8px;
    color: #757575;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;
const CloseButton = styled.button`
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
