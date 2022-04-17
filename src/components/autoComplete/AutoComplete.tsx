import { AutoCompleteSpace } from 'AutoCompleteModule';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AutoCompleteTag from './AutoCompleteTag';

//다른 곳에서 쓰려면 autoTagClickSkill부분의 setState부분을 바꿔주면 됨.
const AutoComplete = ({ data, searchWord, autoTagClickSkill }: AutoCompleteSpace.autoCompleteProps) => {
    const [searchArr, setSearchArr] = useState<{ id: number; name: string }[]>(
        data.filter((item) => item?.name.toLowerCase().includes(searchWord.toLowerCase())),
    );

    useEffect(() => {
        const tmpArr = data.filter((item) => item?.name.toLowerCase().includes(searchWord.toLowerCase()));
        setSearchArr(tmpArr);
    }, [searchWord]);

    useEffect(() => {
        console.log(searchArr);
    }, []);

    return (
        <AutoCompleteDiv>
            <AutoCompleteTagArea>
                {searchArr.map((item, idx) => (
                    <AutoCompleteTag key={idx} title={item.name} autoTagClickSkill={autoTagClickSkill} />
                ))}
            </AutoCompleteTagArea>
        </AutoCompleteDiv>
    );
};

export default AutoComplete;

const AutoCompleteDiv = styled.div`
    width: 21rem;
    height: 5rem;
    overflow: scroll;
`;

const AutoCompleteTagArea = styled.div``;
