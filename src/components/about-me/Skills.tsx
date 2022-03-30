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
    const [skillTagData, setSkillTagData] = useState<{ title: string; description: string[] }[]>([
        { title: 'React', description: ['React bbb', 'ccc', 'ddd'] },
        { title: 'JavaScript', description: ['JavaScript bbb', 'ccc', 'ddd'] },
        { title: 'Next.js', description: ['Next.js bbb', 'ccc', 'ddd'] },
        { title: 'Python', description: ['Python bbb', 'ccc', 'ddd'] },
        { title: 'styled-components', description: ['styled-components bbb', 'ccc', 'ddd', 'bsdbsb'] },
    ]);
    //선택되는 스킬을 set 하기 위한
    const [targetSkill, setTargetSkill] = useState<string | undefined>('');
    const [targetDescription, setTargetDescription] = useState<string[]>([]);
    const [isChecked, setIsChecked] = useState<string>(''); //스킬 선택 (클릭) 여부
    const [skillModalOpen, setSkillModalOpen] = useState<boolean>(false);

    //현재 선택된 스킬이 유효한지 판단
    useEffect(() => {
        const targetIsValid = skillTagData.find((item) => item.title === targetSkill);
        if (targetIsValid === undefined && targetSkill !== '') {
            if (skillTagData.length !== 0) {
                setTargetSkill(skillTagData[0].title);
                return;
            }
            if (skillTagData.length === 0) {
                setTargetSkill('');
            }
        }
    }, [skillTagData]);

    useEffect(() => {
        if (targetSkill !== '') {
            skillTagData.map((i: any) => {
                if (i.title === targetSkill) {
                    setTargetDescription(i.description);
                }
                return undefined;
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetSkill, skillTagData]);

    const onSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.dataset.value;
        setTargetSkill(value);
    };

    const onDeleteSkill = (e: React.SyntheticEvent<HTMLSpanElement>) => {
        const value = e.currentTarget.dataset.value;

        //TODO : 알림 모달로 바꾸면 어떨지 고려
        if (window.confirm(`${value}를 삭제하시겠습니까?`)) {
            const tmpArr = skillTagData.filter((item) => item.title !== value);
            setSkillTagData(tmpArr);
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

    const completeSkillModal = () => {
        setSkillModalOpen((current) => !current);
        console.log(skillModalOpen);
    };

    const onAddSkill = (title: string, description: string[]): void => {
        const tmpArr = skillTagData;
        tmpArr.push({ title, description });
        setSkillTagData(tmpArr);
        setSkillModalOpen(false);
    };

    //TODO : target을 동적으로 받아올 방법
    const updateSkillTagData = (
        target: 'title' | 'description',
        targetSkill: string | undefined,
        newDescription: string[] | undefined,
    ) => {
        if (newDescription !== undefined) {
            setSkillTagData(
                skillTagData.map((item) =>
                    item.title === targetSkill ? { ...item, description: newDescription } : item,
                ),
            );
            return;
        }
        console.log('세부 사항이 널임');
    };

    return (
        <Div>
            <SubTitle text="🔨 Skills" section="skills" />
            <TagArea>
                {skillTagData.length === 0 && !isEditMode ? (
                    <div>스킬을 입력해주세요!</div>
                ) : (
                    skillTagData.map((item, idx) => (
                        <SkillTag
                            key={idx}
                            skill={item.title}
                            targetSkill={targetSkill}
                            isEditMode={isEditMode}
                            onSkillChange={onSkillChange}
                            onDeleteSkill={onDeleteSkill}
                        />
                    ))
                )}
                {isEditMode && <AddTag onClick={onChangeSkillModalState}>+</AddTag>}
            </TagArea>
            <SkillsDetail
                skillTagData={skillTagData}
                skillTitles={targetSkill}
                skillDescriptions={targetDescription}
                isEditMode={isEditMode}
                updateSkillTagData={updateSkillTagData}
            />
            {skillModalOpen && (
                <SkillTagAddModal
                    skillModalOpen={skillModalOpen}
                    onAddSkill={onAddSkill}
                    onChangeSkillModalState={onChangeSkillModalState}
                    completeSkillModal={completeSkillModal}
                />
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
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
    flex-wrap: wrap;
`;

const AddDiv = styled.div`
    font-size: 15px;
    width: auto;
    height: 30px;
    border-radius: 30px;
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
