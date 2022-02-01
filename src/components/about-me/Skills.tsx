import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubTitle from '../SubTitle';
import SkillsDetail from './SkillsDetail';
import SkillTag from './SkillTag';
import { aboutMeProps } from 'AboutMePageModuel';

const Skills = () => {
    //유저의 스킬
    const tmpSkillTitles: string[] = ['React', 'JavaScript', 'Next.js', 'Python', 'styled-components'];

    //TODO : 타입 세부 수정
    const tmpSkillDescriptions: { title: string; describe: string[] }[] = [
        { title: 'React', describe: ['React bbb', 'ccc', 'ddd'] },
        { title: 'JavaScript', describe: ['JavaScript bbb', 'ccc', 'ddd'] },
        { title: 'Next.js', describe: ['Next.js bbb', 'ccc', 'ddd'] },
        { title: 'Python', describe: ['Python bbb', 'ccc', 'ddd'] },
        { title: 'styled-components', describe: ['styled-components bbb', 'ccc', 'ddd'] },
    ];

    //선택되는 스킬을 set 하기 위한
    const [targetSkill, setTargetSkill] = useState<string>('');
    const [targetDescribe, setTargetDescribe] = useState<string[]>([]);
    const [isChecked, setIsChecked] = useState<string>(''); //스킬 선택 (클릭) 여부

    useEffect(() => {
        if (targetSkill !== '') {
            tmpSkillDescriptions.map((i: any) => {
                if (i.title === targetSkill) {
                    setTargetDescribe(i.describe);
                }
                return undefined;
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetSkill]);

    const onSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setTargetSkill(value);
    };

    return (
        <Div>
            <SubTitle text="🔨 Skills" />
            <TagArea>
                {tmpSkillTitles.map((item, idx) => (
                    <SkillTag key={idx} skill={item} onSkillChange={onSkillChange} />
                ))}
            </TagArea>
            <SkillsDetail skillTitles={targetSkill} skillDescribes={targetDescribe} />
        </Div>
    );
};

export default Skills;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TagArea = styled.div`
    padding: 5px 0px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
`;
