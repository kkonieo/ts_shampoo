import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { RecoilProps } from 'RecoilModule';
import styled, { keyframes } from 'styled-components';
import { aboutMeData, aboutMeEditState } from '../../utils/data/atom';
import SubTitle from '../SubTitle';

interface Props {
    isEditMode: boolean;
}

const Summary = ({ isEditMode }: Props) => {
    const [contents, setContents] = useRecoilState(aboutMeData);
    const [summaryState, setSummaryState] = useState(contents.summary.split('\n'));
    // const [editSummary, setEditSummary] = useState(summaryState);
    const [editSummaryText, setEditSummaryText] = useState<string>(contents.summary);

    const [controlEditMode, setControlEditMode] = useRecoilState<RecoilProps.aboutMeEditProps[]>(aboutMeEditState);
    const editTextRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        console.log(contents.summary);
        setSummaryState(contents.summary.split('\n'));
    }, [contents]);

    /*
        수정할때 (onChange) : setEditSummary
        수정 완료시 (onSubmit) : 
     */

    useEffect(() => {
        if (editTextRef === null || editTextRef.current === null) {
            return;
        }
        handleResizeTextAreaHeight();
    }, [isEditMode]);

    const handleResizeTextAreaHeight = useCallback(() => {
        if (editTextRef === null || editTextRef.current === null) {
            return;
        }
        editTextRef.current.style.height = '100px';
        editTextRef.current.style.height = editTextRef.current.scrollHeight + 'px';
    }, []);

    const onEditTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value === '\n') {
            console.log('엔터감지');
        }
        //TODO : 로직 수정해야함
        setEditSummaryText(e.currentTarget.value);
        //setEditSummary([...editSummary, editSummaryText]);
        console.log(e.currentTarget.value);
    };

    const onChangeSummaryEditMode = () => {
        setControlEditMode(
            controlEditMode.map((item) =>
                item.id === 'summary' ? { ...item, editMode: !item.editMode } : { ...item, editMode: false },
            ),
        );
    };

    const onEditTextSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (window.confirm('수정하시겠습니까?')) {
            setContents({ summary: editSummaryText });
            onChangeSummaryEditMode();
        } else {
            alert('취소를 눌렀습니다');
        }
    };

    return (
        <Div>
            <SubTitle text="🧑‍💻 About me" section="summary" />
            {!isEditMode && (
                <ContentsArea>
                    {summaryState.map((item, idx) => (
                        <UserIntroduce key={idx}>{item}</UserIntroduce>
                    ))}
                </ContentsArea>
            )}
            {isEditMode && (
                <ContentsArea>
                    <EditArea>
                        <EditForm onSubmit={onEditTextSubmit}>
                            <TextArea
                                ref={editTextRef}
                                value={editSummaryText}
                                onInput={handleResizeTextAreaHeight}
                                onChange={onEditTextChange}
                            />
                            <EditSubmitBtn>제출</EditSubmitBtn>
                        </EditForm>
                    </EditArea>
                </ContentsArea>
            )}
        </Div>
    );
};

export default Summary;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
`;

const ContentsArea = styled.div`
    font-size: 17px;
    font-weight: 400;
    margin-top: 15px;
`;

const UserIntroduce = styled.div`
    font-size: 16px;
    margin-bottom: 3px;
`;

//editElement

const EditArea = styled.div`
    margin-top: 15px;
`;

const EditForm = styled.form`
    width: 100%;
    height: 100%;
    padding: 0;
`;

const TextArea = styled.textarea`
    width: 100%;
    font-size: 17px;
    font-weight: 400;
    resize: none;
    box-sizing: border-box;
    padding: 10px;
    background-color: ${(props) => props.theme.color.background};
`;

const EditSubmitBtn = styled.button`
    background-color: rgb(89, 147, 246);
    text-align: center;
    padding: 7px;
    border-radius: 20%;
    &:hover {
        background-color: rgba(89, 147, 246, 0.5);
    }
`;
