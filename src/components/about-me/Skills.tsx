import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubTitle from '../SubTitle';
import SkillsDetail from './SkillsDetail';
import SkillTag from './SkillTag';

const Skills = () => {
    //유저의 스킬
    const tmpSkillTitles: string[] = ['React', 'JavaScript', 'Next.js', 'Python', 'styled-components'];

    const tmpSkillDescribes: Object[] = [
        { title: 'React', describe: ['React bbb', 'ccc', 'ddd'] },
        { title: 'JavaScript', describe: ['JavaScript bbb', 'ccc', 'ddd'] },
        { title: 'Next.js', describe: ['Next.js bbb', 'ccc', 'ddd'] },
        { title: 'Python', describe: ['Python bbb', 'ccc', 'ddd'] },
        { title: 'styled-components', describe: ['styled-components bbb', 'ccc', 'ddd'] },
    ];

    //선택되는 스킬을 set 하기 위한
    const [targetSkill, setTargetSkill] = useState<string>('');
    const [targetDescribe, setTargetDescribe] = useState<string[]>([]);

    useEffect(() => {
        if (targetSkill !== '') {
            tmpSkillDescribes.map((i: any) => {
                if (i.title === targetSkill) {
                    setTargetDescribe(i.describe);
                }
                return undefined;
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetSkill]);

    useEffect(() => {
        if (targetDescribe !== []) {
            console.log(targetDescribe);
        }
        return undefined;
    }, [targetDescribe]);

    const onSkillClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
        const value = String(e.currentTarget.dataset.value);
        //스킬 세팅
        setTargetSkill(value);
    };

    return (
        <Div>
            <SubTitle text="🔨 Skills" />
            <TagArea>
                {tmpSkillTitles.map((item, idx) => (
                    <SkillTag key={idx} skill={item} onSkillClick={onSkillClick} />
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
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
`;
