import { useEffect, useState } from 'react';
import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'react-router-dom';
import { ImgEdit, TitleEdit, DateEdit, LinkEdit, TagEdit } from './edit';
interface IProps {
    handleChangeToggle?: (...args: any[]) => any;
    editMode?: boolean;
}

const ProjectDetail: React.FunctionComponent<IProps> = ({ handleChangeToggle, editMode }) => {
    const projectId = useParams().id;
    const data: ProjectProps.IProjectProps = {
        projectId: projectId,
        title: '프로젝트 토끼토끼',
        startDate: '2021-01-31',
        endDate: '2021-02-28',
        techStack: ['Django', 'Flask', 'TypeScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명0',
        urlLink: [
            { linkName: 'Live Demo', linkUrl: 'https://youtube.com' },
            { linkName: 'Github', linkUrl: 'https://github.com' },
        ],
    };

    const [title, setTitle] = useState<string>(data.title);
    const [startDate, setStartDate] = useState<string>(data.startDate);
    const [endDate, setEndDate] = useState<string>(data.endDate);
    const [explain, setExplain] = useState<string>(data.explain);
    const [gifSrc, setGifSrc] = useState<string>(data.gifSrc);
    const [imgSrc, setImgSrc] = useState<string>(data.imgSrc);
    const [techStack, setTechStack] = useState<string[]>(data.techStack);
    const [urlLink, setUrlLink] = useState<ProjectProps.IUrl[]>(data.urlLink);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data: ProjectProps.IProjectProps = {
            projectId: projectId,
            title: title,
            startDate: startDate,
            endDate: endDate,
            /*
            gifSrc 와 imgSrc : 이미지 파일이 있으면 이미지 파일 Blob처리해서 보내고, 
            건들지 않아서 서버에 이미지가 저장된 경로 그대로 보유하고 있다면, 그 경로만 보내준다.
            */
            gifSrc: gifBlob ?? gifSrc,
            imgSrc: imgBlob ?? imgSrc,
            techStack: techStack,
            urlLink: urlLink,
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
    const handleDeletePreview = (imgSrc: any, setImgSrc: Function) => {
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
        <DetailForm onSubmit={handleSubmit}>
            <TitleEdit title={title} setTitle={setTitle} editMode={editMode} />
            <DateEdit
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                editMode={editMode}
            />
            <ImgEdit
                editMode={editMode}
                source={gifSrc}
                alt="라이브 데모 GIF"
                setSrc={setGifSrc}
                handleShowPreview={handleShowGifPreview}
                accept="gif,"
            />
            {editMode && (
                <ImgEdit
                    editMode={editMode}
                    source={imgSrc}
                    alt="프로젝트 이미지"
                    setSrc={setImgSrc}
                    handleShowPreview={handleShowImgPreview}
                    accept="png, .jpg, .jpeg, .svg"
                />
            )}
            <h2>프로젝트 설명</h2>
            {editMode && (
                <MDEditor
                    height={window.innerHeight * 0.3}
                    value={explain}
                    onChange={(newValue = '') => setExplain(newValue)}
                />
            )}
            <MDEditor.Markdown source={explain} />
            <TagEdit techStack={techStack} setTechStack={setTechStack} editMode={editMode} />
            <LinkEdit urlLink={urlLink} setUrlLink={setUrlLink} editMode={editMode} />
            {editMode && (
                <div>
                    <button type="submit">수정</button>
                    <button type="button" onClick={handleChangeToggle}>
                        취소
                    </button>
                </div>
            )}
        </DetailForm>
    );
};

export default ProjectDetail;

const DetailForm = styled.form`
    font-family: 'Montserrat', 'EliceRegular';
    margin-top: 3%;
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

    h2 {
        border-bottom: 1px solid black;
        margin: 2% 0;
    }
`;
