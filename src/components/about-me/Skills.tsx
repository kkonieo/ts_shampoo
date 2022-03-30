import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubTitle from '../SubTitle';
import SkillsDetail from './SkillsDetail';
import SkillTag from './SkillTag';
import { aboutMeProps } from 'AboutMePageModuel';
import SkillTagAddModal from './SkillTagAddModal';

interface Props {
    isEditMode: boolean;
}

const Skills = ({ isEditMode }: Props) => {
    const [skillTagData, setSkillTagData] = useState<{ title: string; describe: string[] }[]>([
        { title: 'React', describe: ['React bbb', 'ccc', 'ddd'] },
        { title: 'JavaScript', describe: ['JavaScript bbb', 'ccc', 'ddd'] },
        { title: 'Next.js', describe: ['Next.js bbb', 'ccc', 'ddd'] },
        { title: 'Python', describe: ['Python bbb', 'ccc', 'ddd'] },
        { title: 'styled-components', describe: ['styled-components bbb', 'ccc', 'ddd'] },
    ]);
    //선택되는 스킬을 set 하기 위한
    const [targetSkill, setTargetSkill] = useState<string>('');
    const [targetDescribe, setTargetDescribe] = useState<string[]>([]);
    const [isChecked, setIsChecked] = useState<string>(''); //스킬 선택 (클릭) 여부
    const [skillModalOpen, setSkillModalOpen] = useState<boolean>(false);

    useEffect(() => {
        if (targetSkill !== '') {
            skillTagData.map((i: any) => {
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

    const onDeleteSkill = (e: React.SyntheticEvent<HTMLSpanElement>) => {
        const targetNode = e.currentTarget.nextSibling?.nextSibling;
        const value = targetNode?.textContent;

        //TODO : 알림 모달로 바꾸면 어떨지 고려
        if (window.confirm(`${value}를 삭제하시겠습니까?`)) {
            const tmpArr = skillTagData.filter((item) => item.title !== value);
            setSkillTagData(tmpArr);
            console.log(tmpArr);
        } else {
            return;
        }
    };

    const onChangeSkillModalState = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLDivElement;
        console.log(target.className);
        if (target.className.includes('modalContainer')) {
            return;
        }
        if (target.className.includes('modalDim')) {
            setSkillModalOpen(false);
            return;
        }
        setSkillModalOpen(true);
    };

    const onAddSkill = (title: string, describe: string[]): void => {
        const tmpArr = skillTagData;
        tmpArr.push({ title, describe });
        setSkillTagData(tmpArr);
        setSkillModalOpen(false);
    };

    return (
        <Div>
            <SubTitle text="🔨 Skills" section="skills" />
            <TagArea>
                {skillTagData.map((item, idx) => (
                    <SkillTag
                        key={idx}
                        skill={item.title}
                        isEditMode={isEditMode}
                        onSkillChange={onSkillChange}
                        onDeleteSkill={onDeleteSkill}
                    />
                ))}
                {isEditMode && (
                    <div onClick={onChangeSkillModalState}>
                        <AddTag>+</AddTag>
                    </div>
                )}
            </TagArea>
            <SkillsDetail skillTitles={targetSkill} skillDescribes={targetDescribe} />
            {skillModalOpen && (
                <SkillTagAddModal onAddSkill={onAddSkill} onChangeSkillModalState={onChangeSkillModalState} />
            )}
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
    align-items: center;
    flex-wrap: wrap;
`;

const AddTag = styled.div`
    font-size: 15px;
    width: 60px;
    height: 30px;
    border-radius: 30px;
    border: 2px dotted;
    cursor: pointer;
    padding: 10px;
    text-align: center;
`;
