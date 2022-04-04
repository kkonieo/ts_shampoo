import styled from 'styled-components';
import { aboutMeProps } from 'AboutMePageModuel';
import React, { useEffect, useState } from 'react';

interface Props {}

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
    const [newDescription, setNewDescription] = useState<string>('');
    const [editDescriptionIndex, setEditDescriptionIndex] = useState<number>(-1);

    useEffect(() => {
        if (!isEditMode) {
            setNewDescription('');
            setEditDescriptionIndex(-1);
        }
    }, [isEditMode]);

    const onChangeUpdateDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
        //TODO : 글자 제한을 두는 방법을 생각해야함
        const { value } = e.target;
        setNewDescription(value);
    };

    const onSubmitUpdateDetail = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tmpDescription = skillDescriptions;
        tmpDescription.splice(editDescriptionIndex, 1, newDescription);

        updateSkillTagData('description', skillTitles, tmpDescription);
        setEditDescriptionIndex(-1);
        setNewDescription('');
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
        setNewDescription(skillDescriptions[Number(clickedIndex)]);
    };

    return (
        <Div>
            <DetailTitle>{skillTitles === '' ? 'My Skill' : skillTitles}</DetailTitle>
            <DetailContentsArea>
                {/* 클릭시에 바뀌도록 구현 예정*/}
                {skillTitles === '' ? (
                    <EmptyDetail>자세히 알고싶다면 스킬을 클릭해보세요!</EmptyDetail>
                ) : (
                    skillDescriptions.map((item, idx) => (
                        <DetailContentItem key={idx}>
                            {!(idx === editDescriptionIndex) && <div data-item={item}>{item}</div>}
                            {idx === editDescriptionIndex && isEditMode && (
                                <form onSubmit={onSubmitUpdateDetail}>
                                    <input value={newDescription} onChange={onChangeUpdateDetail} />
                                </form>
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
    font-size: 18px;
    height: 30px;
    font-weight: 600;
    border-radius: 8px 8px 0px 0px;
    box-sizing: border-box;
    padding: 8px;
    background-color: #f5f5f5;
`;

const DetailContentsArea = styled.div`
    overflow: auto;
    padding: 10px;
    box-sizing: border-box;
    background-color: rgba(196, 196, 196, 0.4);
    border-radius: 0px 0px 8px 8px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    margin-left: auto;
    margin-right: 0.5rem;
`;
