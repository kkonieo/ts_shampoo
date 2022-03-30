import { AutoCompleteSpace } from 'AutoCompleteModule';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AutoCompleteTag from './AutoCompleteTag';

const AutoComplete = ({ data, searchWord }: AutoCompleteSpace.autoCompleteProps) => {
    const [searchArr, setSearchArr] = useState<{ id: string; name: string }[]>(
        data.filter((item) => item.name.includes(searchWord)),
    );

    useEffect(() => {
        const tmpArr = data.filter((item) => item.name.includes(searchWord));
        setSearchArr(tmpArr);
    }, [searchWord]);

    useEffect(() => {
        console.log(searchArr);
    }, []);

    return (
        <AutoCompleteDiv>
            <AutoCompleteTagArea>
                {searchArr.map((item, idx) => (
                    <AutoCompleteTag key={idx} title={item.name} />
                ))}
            </AutoCompleteTagArea>
        </AutoCompleteDiv>
    );
};

export default AutoComplete;

const AutoCompleteDiv = styled.div`
    height: 5rem;
    overflow: scroll;
`;

const AutoCompleteTagArea = styled.div``;
