import styled from 'styled-components';
import { aboutMeProps } from 'AboutMePageModuel';
import React, { useEffect, useRef, useState } from 'react';

const SkillsDetail = ({
    skillTagData,
    skillTitles,
    skillDescriptions,
    isEditMode,
    updateSkillTagData,
}: aboutMeProps.SkillsDetailProps) => {
    // const [isUpdateModeDescription, setIsUpdateModeDescripiton] = useState<boolean[]>(
    //     Array(skillDescriptions.length).fill(false),
    // );
    const [isDescriptionAdd, setIsDescriptionAdd] = useState<boolean>(false);
    const [newDescription, setNewDescription] = useState<string>('');
    const [editDescriptionIndex, setEditDescriptionIndex] = useState<number>(-1);
    const [editDescription, setEditDescription] = useState<string>('');

    const addDescripitonRef = useRef<HTMLInputElement>(null);
    const updateDescriptionRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isEditMode) {
            resetAllDetailState();
        }
    }, [isEditMode]);

    useEffect(() => {
        if (!isDescriptionAdd) {
            setNewDescription('');
            return;
        }
        addDescripitonRef.current?.focus();
    }, [isDescriptionAdd]);

    useEffect(() => {
        if (editDescriptionIndex !== -1) {
            updateDescriptionRef.current?.focus();
            return;
        }
    }, [editDescriptionIndex]);

    //현재 파일의 모든  state 초기화
    const resetAllDetailState = () => {
        setNewDescription('');
        setEditDescriptionIndex(-1);
        setIsDescriptionAdd(false);
        setEditDescription('');
    };

    const onChangeAddDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
        //TODO : 글자 제한을 두는 방법을 생각해야함
        const { value } = e.target;
        setNewDescription(value);
    };

    const onChangeUpdateDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
        //TODO : 글자 제한을 두는 방법을 생각해야함
        const { value } = e.target;
        setEditDescription(value);
    };

    const onSubmitUpdateDetail = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tmpDescription = skillDescriptions;
        tmpDescription.splice(editDescriptionIndex, 1, editDescription);

        updateSkillTagData('description', skillTitles, tmpDescription);
        setEditDescriptionIndex(-1);
        setEditDescription('');
    };

    const onClickDetailDeleteBtn = (e: React.SyntheticEvent<HTMLDivElement>) => {
        const value = skillTagData.find((item) => item.title === skillTitles);

        const clickedItem = e.currentTarget.dataset.item;
        const resultDes = value?.description.filter((item) => item !== clickedItem);

        updateSkillTagData('description', skillTitles, resultDes);
    };

    const onClickDetailUpdateBtn = (e: React.SyntheticEvent<HTMLDivElement>) => {
        let clickedIndex = e.currentTarget.dataset['index'];

        setEditDescriptionIndex(Number(clickedIndex));
        setEditDescription(skillDescriptions[Number(clickedIndex)]);
    };

    const onClickDetailAddBtn = (e: React.SyntheticEvent<HTMLDivElement>) => {
        setIsDescriptionAdd((current) => !current);
        addDescripitonRef.current?.focus();
    };

    const onSubmitNewDescription = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tmpArr: string[] = skillDescriptions;
        if (newDescription.trim() === '') {
            alert('입력이 완료되지 않았습니다.');
        } else {
            tmpArr.push(newDescription);
            updateSkillTagData('description', skillTitles, tmpArr);
            setNewDescription('');
            setIsDescriptionAdd(false);
        }
    };

    return (
        <Div>
            <DetailTitle>
                {skillTitles === '' ? 'My Skill' : <span>{skillTitles}</span>}
                {isEditMode && skillTitles !== '' && (
                    <DetailItemAddBtn onClick={onClickDetailAddBtn}>세부 추가</DetailItemAddBtn>
                )}
            </DetailTitle>
            <DetailContentsArea>
                {skillTitles === '' ? (
                    <EmptyDetail>자세히 알고싶다면 스킬을 클릭해보세요!</EmptyDetail>
                ) : (
                    skillDescriptions.map((item, idx) => (
                        <DetailContentItem key={idx}>
                            {!(idx === editDescriptionIndex) && <div data-item={item}>{item}</div>}
                            {idx === editDescriptionIndex && isEditMode && (
                                <EditForm onSubmit={onSubmitUpdateDetail}>
                                    <EditInput
                                        ref={updateDescriptionRef}
                                        value={editDescription}
                                        onChange={onChangeUpdateDetail}
                                    />
                                </EditForm>
                            )}
                            {isEditMode && (
                                <DetailItemBtnContainer>
                                    <DetailItemUpdateBtn data-index={idx} onClick={onClickDetailUpdateBtn}>
                                        수정
                                    </DetailItemUpdateBtn>
                                    <DetailItemDeleteBtn data-item={item} onClick={onClickDetailDeleteBtn}>
                                        삭제
                                    </DetailItemDeleteBtn>
                                </DetailItemBtnContainer>
                            )}
                        </DetailContentItem>
                    ))
                )}

                {isDescriptionAdd && (
                    <EditForm onSubmit={onSubmitNewDescription}>
                        <EditInput
                            ref={addDescripitonRef}
                            placeholder="새로운 스킬 설명"
                            value={newDescription}
                            onChange={onChangeAddDetail}
                        />
                    </EditForm>
                )}
            </DetailContentsArea>
        </Div>
    );
};

export default SkillsDetail;

const Div = styled.div`
    width: 100%;
    height: 200px; /* TODO : 추후 높이 세부 설정*/
    margin: 20px 0px;
`;

const DetailTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    height: 40px;
    font-weight: 600;
    border-radius: 8px 8px 0px 0px;
    box-sizing: border-box;
    padding: 8px;
    background-color: #f5f5f5;
`;

const DetailContentsArea = styled.div`
    min-height: 100px;
    max-height: 150px;
    overflow: scroll;
    padding: 10px;
    box-sizing: border-box;
    background-color: rgba(196, 196, 196, 0.4);
    border-radius: 0px 0px 8px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`;

const DetailContentItem = styled.li`
    display: flex;
    flex-direction: row;
    list-style: none;
    /* transform: matrix(); */
`;

const EmptyDetail = styled.div`
    font-size: 17px;
    font-weight: 500;
`;

const DetailItemBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: 4rem;
`;

const DetailItemDeleteBtn = styled.div``;

const DetailItemUpdateBtn = styled.div`
    margin-right: 0.5rem;
`;

const DetailItemAddBtn = styled.div`
    width: 100px;
    height: 100%;
    margin-left: auto;
    margin-right: 4rem;
    font-size: 16px;
    background-color: ${(props) => props.theme.color.main};
    text-align: center;
    padding: 2px 3px;
    box-sizing: border-border-box;
    border-radius: 8px;

    &:hover {
        opacity: 0.5;
    }
`;

const EditForm = styled.form`
    margin: 2px 0px;
`;

const EditInput = styled.input``;
