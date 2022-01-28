import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';

const DetailEdit: React.FunctionComponent<ProjectProps.IProjectProps> = () => {
    const skillStack = ['Django', 'Flask', 'TypeScript'];
    const urlLink = [
        { linkName: 'Live Demo', linkURL: 'https://youtube.com' },
        { linkName: 'Github', linkURL: 'https://github.com' },
    ];
    const projectId = useParams();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [explain, setExplain] = useState('**Hello world!!!**');
    const [gifFile, setGifFile] = useState('');
    const [imgFile, setImgFile] = useState('');
    const handleSubmit = (event: any) => {
        event?.preventDefault();
        const data = {
            projectId: projectId,
            title: '제목',
            startDate: startDate,
            endDate: endDate,
            gifFile: gifBlob,
            imgFile: imgBlob,
            explain: explain,
        };
        console.log(data);
    };

    const [gifBlob, setGifBlob] = useState<Blob>();
    const [imgBlob, setImgBlob] = useState<Blob>();
    const handleShowGifPreview = (event: any) => {
        setGifFile(URL.createObjectURL(event.target.files[0]));
        setGifBlob(event.target.files[0]);
    };
    const handleShowImgPreview = (event: any) => {
        setImgFile(URL.createObjectURL(event.target.files[0]));
        setImgBlob(event.target.files[0]);
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
                <DateDiv>
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
                </DateDiv>
                <div>
                    {gifFile && (
                        <>
                            <img alt="프로젝트 라이브 데모" src={gifFile} />

                            <button onClick={() => setGifFile('')}>제거</button>
                        </>
                    )}
                    {!gifFile && (
                        <label>
                            라이브 데모 영상
                            <br />
                            <input type="file" accept="image/*" onChange={handleShowGifPreview} name="gifSrc" />
                        </label>
                    )}
                </div>
                <div>
                    {imgFile && (
                        <>
                            <img alt="썸네일 " src={imgFile} />
                            <button onClick={() => setImgFile('')}>제거</button>
                        </>
                    )}
                    {!imgFile && (
                        <label>
                            프로젝트 이미지
                            <br />
                            <input type="file" accept="image/*" onChange={handleShowImgPreview} name="imgSrc" />
                        </label>
                    )}
                </div>
                <MDEditor
                    height={window.innerHeight * 0.3}
                    value={explain}
                    onChange={(newValue = '') => setExplain(newValue)}
                />
                <MDEditor.Markdown source={explain} />
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

export default DetailEdit;

const DetailForm = styled.form`
    font-family: 'Montserrat', 'EliceRegular';
    display: flex;
    flex-direction: column;
    height: 100%;

    label {
        font-weight: bold;
    }

    button {
        border: 1px solid black;
        margin: auto;
    }
`;

const DateDiv = styled.div`
    display: flex;
    flex-direction: row;
    label {
        margin: auto;
    }
`;
