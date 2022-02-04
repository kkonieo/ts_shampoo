import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { aboutMeEditState } from '../../utils/data/atom';
import SubTitle from '../SubTitle';

interface Props {
    contents: string[];
    isEditMode: boolean;
}

const Summary = ({ contents, isEditMode }: Props) => {
    const [summaryState, setSummaryState] = useState(contents);
    const [editSummary, setEditSummary] = useState(summaryState);
    const [editSummaryText, setEditSummaryText] = useState<string>('');

    const textRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textRef === null || textRef.current === null) {
            return;
        }
        textRef.current.style.height = '100px';
        textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }, []);

    const handleResizeTextAreaHeight = useCallback(() => {
        if (textRef === null || textRef.current === null) {
            return;
        }
        textRef.current.style.height = '100px';
        textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }, []);

    const onEditTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value == '\n') {
            console.log('엔터감지');
        }
        //TODO : 로직 수정해야함
        setEditSummaryText(e.currentTarget.value);
        setEditSummary([...editSummary, editSummaryText]);
        console.log(e.currentTarget.value);
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
                <EditArea>
                    <EditForm>
                        <TextArea
                            ref={textRef}
                            value={editSummary.map((item, idx) => item + '\n').join('')}
                            onInput={handleResizeTextAreaHeight}
                            onChange={onEditTextChange}
                        />
                    </EditForm>
                </EditArea>
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
    width: 100%;
    height: 100%;
    margin-top: 15px;
`;

const EditForm = styled.form`
    width: 100%;
    padding: 0;
`;

const TextArea = styled.textarea`
    width: 100%;
    font-size: 17px;
    font-weight: 400;
    resize: none;
    overflow: visible;
    box-sizing: border-box;
    padding: 10px;
    background-color: ${(props) => props.theme.color.background};
`;
