import styled from 'styled-components';
import { UserSpace } from 'InformationModule';

// 직군, 기술스택의 checkbox창 만드는 로직
export const Filter = ({
    data,
    filterBox,
    selectedFilter,
    setSelectedFilter,
}: {
    data: Array<UserSpace.Job>;
    filterBox: any;
    selectedFilter: string[];
    setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>;
}): JSX.Element => {
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
