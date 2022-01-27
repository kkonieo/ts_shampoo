import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubTitle from '../SubTitle';
import SkillsDetail from './SkillsDetail';
import SkillTag from './SkillTag';

const SkillsTest = () => {
    //유저의 스킬
    const tmpSkillTitles: string[] = ['React', 'JavaScript', 'Next.js', 'Python', 'styled-components'];

    const tmpSkillDescribes: { title: string; describe: string[] }[] = [
        { title: 'React', describe: ['React bbb', 'ccc', 'ddd'] },
        { title: 'JavaScript', describe: ['JavaScript bbb', 'ccc', 'ddd'] },
        { title: 'Next.js', describe: ['Next.js bbb', 'ccc', 'ddd'] },
        { title: 'Python', describe: ['Python bbb', 'ccc', 'ddd'] },
        { title: 'styled-components', describe: ['styled-components bbb', 'ccc', 'ddd'] },
    ];

    const onSkillClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
        console.log(e);
    };

    return (
        <Div>
            <SubTitle text="🔨 Skills" />
            <TagArea>
                {tmpSkillTitles.map((item, idx) => (
                    <SkillTag key={idx} skill={item} onSkillClick={onSkillClick} />
                ))}
            </TagArea>
            {tmpSkillTitles.map((skill, idx) => (
                <SkillsDetail
                    skillTitles={skill}
                    skillDescribes={tmpSkillDescribes.find((i) => i.title === skill)?.describe}
                />
            ))}
        </Div>
    );
};

export default SkillsTest;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TagArea = styled.div`
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
`;
