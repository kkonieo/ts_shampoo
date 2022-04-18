import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { RecoilProps } from 'RecoilModule';
import styled, { keyframes } from 'styled-components';
import Cookies from 'universal-cookie';
import { summaryApi } from '../../utils/api/aboutMe';
import { aboutMeSummaryData, aboutMeEditState, myPortpolio } from '../../utils/data/atom';
import { Button } from '../Button';
import SubTitle from '../SubTitle';

interface Props {
    isEditMode: boolean;
}

const Summary = ({ isEditMode }: Props) => {
    const cookies: Cookies = new Cookies();
    const [contents, setContents] = useRecoilState<RecoilProps.aboutMeSummaryProps>(aboutMeSummaryData);
    const [summaryState, setSummaryState] = useState<string[]>(contents.summary.trim().split('\n'));
    // const [editSummary, setEditSummary] = useState(summaryState);
    const [editSummaryText, setEditSummaryText] = useState<string>(contents.summary);
    const isMyPortpolio = useRecoilValue(myPortpolio);
    const [controlEditMode, setControlEditMode] = useRecoilState<RecoilProps.aboutMeEditProps[]>(aboutMeEditState);
    const [isCreateMode, setIsCreateMode] = useState<boolean>(false);
    const editTextRef = useRef<HTMLTextAreaElement>(null);

    // useEffect(() => {
    //     contents.summary === '' ? setSummaryState([]) : setSummaryState(contents.summary.trim().split('\n'));

    //     console.log(contents.summary === '' ? true : false);
    // }, [contents]);

    /*
        수정할때 (onChange) : setEditSummary
        수정 완료시 (onSubmit) : 
     */

    useEffect(() => {
        const tmpArr = contents.summary.trim().split('\n');
        setEditSummaryText(contents.summary);
        setSummaryState(tmpArr);
    }, [contents]);

    useEffect(() => {
        if (!(summaryState.length === 1 && summaryState[0] === '')) {
            setIsCreateMode(false);
        }
    }, [summaryState]);

    useEffect(() => {
        if (!isEditMode) {
            setEditSummaryText('');
        }
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
            const tmpSummary = editSummaryText.trim().split('\n');

            const token = cookies.get('accessToken');
            console.log(token);
            try {
                summaryApi
                    .editUserSummary(editSummaryText, token)
                    .then((res) => {
                        if (res.status === 200) {
                            setContents({ summary: editSummaryText });
                        }
                    })
                    .catch((error) => {
                        if (error.response) {
                            // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else if (error.request) {
                            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                            // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                            // Node.js의 http.ClientRequest 인스턴스입니다.
                            console.log(error.request);
                            alert('네트워크 오류 발생');
                        } else {
                            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    });
            } catch (e) {
                alert('에러 발생!');
                console.log(e);
            }
            setSummaryState(tmpSummary);
            onChangeSummaryEditMode();
        } else {
            alert('취소를 눌렀습니다');
        }
    };

    const onSubmitCreateSummary = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (window.confirm('저장 하시겠습니까?')) {
            const tmpSummary = editSummaryText.trim().split('\n');

            const token = cookies.get('accessToken');
            try {
                summaryApi
                    .createUserSummary(editSummaryText, token)
                    .then((res) => {
                        if (res.status === 200) {
                            setContents({ summary: editSummaryText });
                        }
                    })
                    .catch((error) => {
                        if (error.response) {
                            // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else if (error.request) {
                            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                            // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                            // Node.js의 http.ClientRequest 인스턴스입니다.
                            console.log(error.request);
                            alert('네트워크 오류 발생');
                        } else {
                            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    });
            } catch (e) {
                alert('에러 발생!');
                console.log(e);
            }
            setSummaryState(tmpSummary);
            setIsCreateMode(false);
        } else {
            alert('취소를 눌렀습니다');
        }
    };

    return (
        <Div>
            <SubTitle text="🧑‍💻 About me" section="summary" additionalData={contents} />
            {!isEditMode && (
                <ContentsArea>
                    {!isCreateMode && summaryState?.length === 1 && summaryState[0] === '' ? (
                        <div>
                            <div>자기 소개를 입력해보세요!</div>
                            {isMyPortpolio && (
                                <CreateSummaryBtn
                                    onClick={() => {
                                        setIsCreateMode(true);
                                    }}
                                >
                                    <span>생성</span>
                                </CreateSummaryBtn>
                            )}
                        </div>
                    ) : (
                        summaryState?.map((item, idx) => <UserIntroduce key={idx}>{item}</UserIntroduce>)
                    )}
                </ContentsArea>
            )}
            {isCreateMode && (
                <ContentsArea>
                    <div className="test">새로운 자기 소개</div>
                    <EditArea>
                        <EditForm onSubmit={onSubmitCreateSummary}>
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

const CreateSummaryBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.buttonColor};
    &:hover {
        background-color: ${(props) => props.theme.color.buttonHoverColor};
    }
`;
