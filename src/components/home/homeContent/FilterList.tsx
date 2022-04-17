import { useMemo } from 'react';
import styled from 'styled-components';

export const FilterList = ({
    selectedFilter,
    setSelectedFilter,
}: {
    selectedFilter: string[];
    setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
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

    return <FiltersListDiv>{selectedFilterMemo}</FiltersListDiv>;
};

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
