import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    onAddSkill: (title: string, describe: string[]) => void;
    onChangeSkillModalState: (e: React.SyntheticEvent) => void;
}

const SkillTagAddModal = ({ onAddSkill, onChangeSkillModalState }: Props) => {
    const [newSkillTitle, setNewSkillTitle] = useState<string>('');
    const [newSkillDescribtion, setNewSkillDescribition] = useState<string[]>([]);

    //TODO : Select로 바꿔야함
    const onChangeSkillTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSkillTitle(e.target.value);
    };

    const onSubmitAddSkill = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (newSkillTitle !== '' && newSkillDescribtion.length !== 0) {
            onAddSkill(newSkillTitle, newSkillDescribtion);
            setNewSkillTitle('');
            setNewSkillDescribition([]);
            return;
        }
        if (newSkillTitle === '') {
            alert('스킬 이름이 입력되지 않았습니다.');
            return;
        }
        if (newSkillDescribtion.length === 0) {
            alert('스킬에 대한 설명을 한가지 이상 작성해주세요.');
            return;
        }
    };

    return (
        <ModalDim className="modalDim" onClick={onChangeSkillModalState}>
            <ModalContainer className="modalContainer">
                <Form>
                    <FormRowDiv>
                        <label>기술 이름</label>
                        <Input placeholder="기술" onChange={onChangeSkillTitle} value={newSkillTitle} />
                    </FormRowDiv>
                    <FormRowDiv>
                        <label>기술 설명</label>
                        <Input placeholder="기술" />
                    </FormRowDiv>
                    <SkillDescriptionContainer>{}</SkillDescriptionContainer>
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
    height: 75%;
    background-color: white;
    box-sizing: border-box;
    padding: 1rem 1.2rem;
    border-radius: 10px;
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form``;

const FormRowDiv = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 80%;
    height: auto;
    box-sizing: border-box;
    padding: 5px;
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

const SkillDescriptionContainer = styled.div``;

const SkillDescription = styled.div``;
