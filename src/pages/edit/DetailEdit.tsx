import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import TitleEdit from '../../components/edit/TitleEdit';

const DetailEdit: React.FunctionComponent<ProjectProps.IProjectProps> = () => {
    const data = {
        id: 0,
        title: '프로젝트 토끼토끼',
        startDate: '2021-01-31',
        endDate: '2021-02-28',
        techStack: ['Django', 'Flask', 'TypeScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명0',
        urlLink: [
            { linkName: 'Live Demo', linkURL: 'https://youtube.com' },
            { linkName: 'Github', linkURL: 'https://github.com' },
        ],
    };

    const projectId = useParams();
    const [title, setTitle] = useState(data.title);
    const [startDate, setStartDate] = useState<string>(data.startDate);
    const [endDate, setEndDate] = useState<string>(data.endDate);
    const [explain, setExplain] = useState<string>(data.explain);
    const [gifSrc, setGifSrc] = useState(data.gifSrc);
    const [imgSrc, setImgSrc] = useState(data.imgSrc);
    const [techStack, setTechStack] = useState(data.techStack);
    const [urlLink, setUrlLink] = useState(data.urlLink);

    const handleSubmit = (event: any) => {
        event?.preventDefault();
        const data = {
            projectId: projectId,
            title: title,
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
        setGifSrc(URL.createObjectURL(event.target.files[0]));
        setGifBlob(event.target.files[0]);
    };
    const handleShowImgPreview = (event: any) => {
        setImgSrc(URL.createObjectURL(event.target.files[0]));
        setImgBlob(event.target.files[0]);
    };
    const handleDeletePreview = (imgSrc: string, setImgSrc: Function) => {
        URL.revokeObjectURL(imgSrc);
        setImgSrc('');
    };

    useEffect(() => {
        return () => {
            handleDeletePreview(gifSrc, setGifSrc);
            handleDeletePreview(imgSrc, setImgSrc);
        };
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <DetailForm onSubmit={handleSubmit}>
                <TitleEdit title={title} setTitle={setTitle} />
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
                    {gifSrc && (
                        <>
                            <img alt="프로젝트 라이브 데모" src={gifSrc} />

                            <button onClick={() => setGifSrc('')}>제거</button>
                        </>
                    )}
                    {!gifSrc && (
                        <label>
                            라이브 데모 영상
                            <br />
                            <input type="file" accept="image/*" onChange={handleShowGifPreview} name="gifSrc" />
                        </label>
                    )}
                </div>
                <div>
                    {imgSrc && (
                        <>
                            <img alt="썸네일 " src={imgSrc} />
                            <button onClick={() => setImgSrc('')}>제거</button>
                        </>
                    )}
                    {!imgSrc && (
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
                {techStack.map((stack, idx) => (idx ? `, ${stack}` : stack))}
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
    padding: 0 5%;
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
