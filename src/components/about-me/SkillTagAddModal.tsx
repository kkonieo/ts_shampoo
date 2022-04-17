import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { skillApi } from '../../utils/api/aboutMe';
import { allSkillData } from '../../utils/data/atom';
import { AutoComplete } from '../autoComplete';

interface Props {
    skillModalOpen: boolean;
    onAddSkill: (title: string, describe: string[]) => void;
    onChangeSkillModalState: (e: React.SyntheticEvent) => void;
    completeSkillModal: () => void;
}

const SkillTagAddModal = ({ onAddSkill, onChangeSkillModalState, completeSkillModal, skillModalOpen }: Props) => {
    const [newSkillTitle, setNewSkillTitle] = useState<string>('');
    const [tmpSkillDescription, setTmpSkillDescription] = useState<string>('');
    const [newSkillDescription, setNewSkillDescription] = useState<string[]>([]);
    const [addDescription, setAddDescription] = useState<boolean>(false);
    const [skillStacks, setSkillStacks] = useRecoilState(allSkillData);

    useEffect(() => {
        if (skillStacks.length === 0) getSkillStacks();
        else console.log(skillStacks);
    }, []);

    useEffect(() => {
        console.log(skillStacks);
    }, [skillStacks]);
    useEffect(() => {
        console.log(newSkillDescription);
    }, [newSkillDescription]);

    //서버에 저장되어있는 모든 스킬 스택 가져오는 메소드
    const getSkillStacks = async () => {
        try {
            await skillApi.getAllSkills().then((response: any) => {
                setSkillStacks(response.data);
                return;
            });
        } catch (e) {
            console.error(e);
        }
    };

    //자동완성에 넘겨줄 함수
    const autoTagClickSkill = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.currentTarget.dataset.title);
        const targetSkill = String(e.currentTarget.dataset.title);
        setNewSkillTitle(targetSkill);
    };

    const onChangeSkillTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSkillTitle(e.target.value);
    };

    const onChangeOneDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            alert('입력이 필요합니다.');
        } else setTmpSkillDescription(e.target.value);
    };

    const onClickAddDescriptionBtn = () => {
        if (newSkillDescription.length === 0 && addDescription === false) {
            setAddDescription(true);
        }
        setAddDescription((current) => !current);
    };

    const addSkillDescription = (e: React.SyntheticEvent) => {
        try {
            e.preventDefault();
            if (tmpSkillDescription === '') {
                alert('입력이 필요합니다.');
            } else {
                setNewSkillDescription((current) => [...current, tmpSkillDescription]);
                // 매번 버튼 클릭해서 입력하게 할지 생각해 봐야 할듯
                // setAddDescription(false);
                setTmpSkillDescription('');
            }
        } catch (e) {
            console.log(e);
        }
    };

    const onSubmitAddSkill = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            if (newSkillTitle !== '' && newSkillDescription.length !== 0) {
                onAddSkill(newSkillTitle, newSkillDescription);
                setNewSkillTitle('');
                setNewSkillDescription([]);
                completeSkillModal();
                return;
            }
            if (newSkillTitle === '') {
                alert('스킬 이름이 입력되지 않았습니다.');
                return;
            }
            if (newSkillDescription.length === 0) {
                alert('스킬에 대한 설명을 한가지 이상 작성해주세요.');
                return;
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <ModalDim className="modalDim" onClick={onChangeSkillModalState}>
            <ModalContainer className="modalContainer">
                <Form>
                    <SkillTitleContainer>
                        <div>기술 이름</div>
                        <Input placeholder="기술" onChange={onChangeSkillTitle} value={newSkillTitle} />
                        {newSkillTitle !== '' && (
                            <AutoComplete
                                data={skillStacks}
                                searchWord={newSkillTitle}
                                autoTagClickSkill={autoTagClickSkill}
                            />
                        )}
                    </SkillTitleContainer>

                    <SkillDescriptionContainer>
                        <RowDiv>
                            <Title>기술 설명</Title>
                            <PlusBtnSpan onClick={onClickAddDescriptionBtn}>+</PlusBtnSpan>
                        </RowDiv>
                        {/* <RowDiv>는 스킬 추가버튼이 눌렸을때 & newSkillDescription.length가 0일경우 보이도록*/}
                        {(addDescription || newSkillDescription.length === 0) && (
                            <RowDiv>
                                <Input
                                    placeholder="기술 설명을 입력해주세요."
                                    value={tmpSkillDescription}
                                    onChange={onChangeOneDescription}
                                />
                                <button onClick={addSkillDescription}>추가</button>
                            </RowDiv>
                        )}
                        {newSkillDescription.length !== 0 && (
                            <SkillDescriptionList>
                                {newSkillDescription.map((item, idx) => (
                                    <SkillDescriptionItem>
                                        {idx + 1}. {item}
                                    </SkillDescriptionItem>
                                ))}
                            </SkillDescriptionList>
                        )}
                    </SkillDescriptionContainer>
                    <EditSubmitBtn onClick={onSubmitAddSkill}>완료</EditSubmitBtn>
                </Form>
            </ModalContainer>
        </ModalDim>
    );
};

export default SkillTagAddModal;

const ModalDim = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 15;
    background-color: rgba(169, 169, 169, 0.8);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
`;

const ModalContainer = styled.div`
    min-width: 500px;
    max-width: 600px;
    max-height: 75%;
    min-height: 60%;
    height: 50%;
    background-color: white;
    box-sizing: border-box;
    padding: 1rem 1.2rem;
    border-radius: 10px;
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
`;

const RowDiv = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
`;

const Input = styled.input`
    width: 80%;
    height: auto;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 15px;
    text-align: center;
    border: 1px solid;
`;

const EditSubmitBtn = styled.button`
    margin-top: 60px;
    background-color: rgb(89, 147, 246);
    text-align: center;
    padding: 7px;
    border-radius: 20%;
    &:hover {
        background-color: rgba(89, 147, 246, 0.5);
    }
`;

const SkillTitleContainer = styled.div`
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SkillDescriptionContainer = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid;
`;

const PlusBtnSpan = styled.span`
    display: inline-block;
    text-align: center;
    width: 20px;
    height: 20px;
    border: 1px solid;
    border-radius: 50%;
    &:hover {
        background-color: gray;
    }
`;

const Title = styled.div`
    display: inline-block;
    margin-right: auto;
`;

const SkillDescriptionArea = styled.div``;

const SkillDescriptionList = styled.li`
    margin: 0;
    list-style: none;
`;

const SkillDescriptionItem = styled.ul``;
