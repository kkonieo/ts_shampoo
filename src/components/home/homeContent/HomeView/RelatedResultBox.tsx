import styled from 'styled-components';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { allSkillData } from '../../../../utils/data/atom';

export const RelatedResultBox = ({
    searchValue,
    setSearchValue,
}: {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const skills = useRecoilValue(allSkillData);

    let relatedSkills = skills.filter((item) => {
        if (item.name && item.name.toLowerCase().includes(searchValue.toLowerCase())) return item;
    });

    const handleClickRelatedSkills = (item: string) => {
        setSearchValue(item);
    };

    const relatedResult = useMemo(() => {
        let relatedSkills = skills.filter((item) => {
            if (item.name && item.name.toLowerCase().includes(searchValue.toLowerCase())) return item;
        });

        return (
            <>
                {searchValue.length > 0 &&
                    relatedSkills.length > 0 &&
                    relatedSkills.map((item: any) => {
                        return (
                            <Relatedskill
                                key={item.id}
                                onClick={() => {
                                    handleClickRelatedSkills(item.name);
                                }}
                            >
                                {item.name}
                            </Relatedskill>
                        );
                    })}
            </>
        );
    }, [searchValue]);

    return (
        <>
            {searchValue.length > 0 && relatedSkills.length > 0 && <RelatedResultDiv>{relatedResult}</RelatedResultDiv>}
        </>
    );
};

const RelatedResultDiv = styled.div`
    width: 70%;
    max-height: 280px;
    overflow-y: scroll;
    border: 1px solid ${(props) => props.theme.color.background};
    padding: 20px;
    position: absolute;
    background-color: #fff;
    top: 54px;
    left: 0;
`;
const Relatedskill = styled.div`
    padding: 6px;
    cursor: pointer;
`;
