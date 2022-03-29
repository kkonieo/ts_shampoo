import styled from 'styled-components';
import { HomeProps } from 'HomeModule';
import { useRecoilValue } from 'recoil';
import { positionsData } from '../../../../utils/data/atom';
import { Filter } from './Filter';

export const FilterPosition = ({
    filterBox,
    positionActive,
    setPositionActive,
    selectedFilter,
    setSelectedFilter,
}: {
    positionActive: boolean;
    filterBox: any;
    setPositionActive: React.Dispatch<React.SetStateAction<boolean>>;
    selectedFilter: string[];
    setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
    const positions = useRecoilValue(positionsData);

    return (
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
    );
};

const FilterPositionDiv = styled.div`
    width: 30%;
    position: relative;
    box-sizing: border-box;
    padding-right: 20px;
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
