import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import MarkdownEditor from '@uiw/react-markdown-editor';
import { useParams } from 'react-router-dom';

const DetailEditPage = () => {
    const gifInput = useRef<HTMLInputElement>(null);
    const pngInput = useRef<HTMLInputElement>(null);
    const skillStack = ['Django', 'Flask', 'TypeScript'];
    const urlLink = [
        { linkName: 'Live Demo', linkURL: 'https://youtube.com' },
        { linkName: 'Github', linkURL: 'https://github.com' },
    ];
    const projectId = useParams();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [explain, setExplain] = useState('');
    const [gifFile, setGifFile] = useState('');
    const [imgFile, setImgFile] = useState('');

    const handleSubmit = (event: any) => {
        event?.preventDefault();
        const data = {
            projectId: projectId,
            startDate: startDate,
            endDate: endDate,
            gifFile: gifFile,
            imgFile: imgFile,
            explain: explain,
        };
        console.log(data);
    };
    const handleShowGifPreview = (event: any) => {
        setGifFile(URL.createObjectURL(event.target.files[0]));
    };
    const handleShowImgPreview = (event: any) => {
        setImgFile(URL.createObjectURL(event.target.files[0]));
    };
    const handleDeletePreview = (imgSrc: string, setImgSrc: Function) => {
        URL.revokeObjectURL(imgSrc);
        setImgSrc('');
    };

    useEffect(() => {
        return () => {
            handleDeletePreview(gifFile, setGifFile);
            handleDeletePreview(imgFile, setImgFile);
        };
        //eslint-disable-next-line
    }, []);
    return (
        <>
            <DetailForm onSubmit={handleSubmit}>
                <div>
                    <label>
                        제작 시작일:{' '}
                        <input
                            type="date"
                            name="startDate"
                            value={startDate}
                            onChange={({ target }) => setStartDate(target.value)}
                        />
                    </label>
                    <label>
                        제작 종료일:{' '}
                        <input
                            type="date"
                            name="endDate"
                            value={endDate}
                            onChange={({ target }) => setEndDate(target.value)}
                        />
                    </label>
                </div>
                <div>
                    {gifFile && (
                        <>
                            <img alt="프로젝트 라이브 데모" src={gifFile} />
                            <button onClick={() => setGifFile('')}>제거</button>
                        </>
                    )}
                    {!gifFile && (
                        <label>
                            <b>프로젝트 라이브 데모 GIF</b>
                            <br />
                            <input
                                ref={gifInput}
                                type="file"
                                accept="image/*"
                                onChange={handleShowGifPreview}
                                name="gifSrc"
                            />
                        </label>
                    )}
                </div>
                <div>
                    {imgFile && (
                        <>
                            <img alt="썸네일 " src={imgFile} />
                            <button onClick={() => setGifFile('')}>제거</button>
                        </>
                    )}
                    {!imgFile && (
                        <label>
                            <b>프로젝트 이미지</b>
                            <br />
                            <input
                                ref={pngInput}
                                type="file"
                                accept="image/*"
                                onChange={handleShowImgPreview}
                                name="imgSrc"
                            />
                        </label>
                    )}
                </div>
                프로젝트 설명
                <MarkdownEditor
                    value={'# This is a H1  \n## This is a H2  \n###### This is a H6'}
                    onChange={(value: any) => setExplain(value.display.maxLine)}
                />
                <b>기술 스택</b>
                {skillStack.map((stack, idx) => (idx ? `, ${stack}` : stack))}
                <b>링크</b>
                {urlLink.map((link) => (
                    <button type="button">{link.linkName}</button>
                ))}
                <div>
                    <button type="submit">수정</button>
                    <button>취소</button>
                </div>
            </DetailForm>
        </>
    );
};

export default DetailEditPage;

const DetailForm = styled.form`
    font-family: 'Montserrat', 'EliceRegular';
    display: flex;
    flex-direction: column;
    height: 100%;
`;
