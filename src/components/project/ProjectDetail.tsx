import { useEffect, useState } from 'react';
import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import { useLocation } from 'react-router-dom';
import { ImgEdit, TitleEdit, DateEdit, LinkEdit, TagEdit, EditButton, AddButton } from './edit';
import { ProjectApi } from '../../utils/api/ProjectApi';
interface IProps {
    handleChangeToggle: (...args: any[]) => void;
    editMode: boolean;
}

const ProjectDetail: React.FunctionComponent<IProps> = ({ handleChangeToggle, editMode }) => {
    const today = new Date(); // 올해의 첫날과 마지막날을 시작일과 종료일로 자동 지정한다. 이를 위한 Date
    const [title, setTitle] = useState<string>('프로젝트명');
    const [startDate, setStartDate] = useState<string>(`${today.getFullYear()}-01-01`);
    const [endDate, setEndDate] = useState<string>(`${today.getFullYear()}-12-31`);
    const [explain, setExplain] = useState<string>('');
    const [gifSrc, setGifSrc] = useState<string>('');
    const [imgSrc, setImgSrc] = useState<string>('');
    const [techStack, setTechStack] = useState<string[]>([]);
    const [urlLink, setUrlLink] = useState<ProjectProps.UrlLink[]>([]);

    // 이미지 파일 저장용 state
    const [gifBlob, setGifBlob] = useState<Blob>();
    const [imgBlob, setImgBlob] = useState<Blob>();

    // urlLink 추가용 모달, TechStack추가용 모달
    const [urlModal, setUrlModal] = useState<boolean>(false);
    const [techModal, setTechModal] = useState<boolean>(false);

    // project/:id
    const [author, projectId] = useLocation().pathname.substring(1).split('/project/');
    const handleSubmit = (e: any) => {
        e?.preventDefault();
        const data: ProjectProps.ProjectDetail = {
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
        async function PostProject() {
            const project = ProjectApi();
            // await project.postProjectDetail(author, data);
        }
    };
    // Api
    useEffect(() => {
        console.log(author, projectId);
        const project = ProjectApi();
        async function getProjectDetail() {
            await project
                .getProjectDetail(author, parseInt(projectId))
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
        //API Dat
        if (projectId === 'add') {
            handleChangeToggle();
            return;
        } else {
            getProjectDetail();

            const data: ProjectProps.ProjectDetail = {
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
            setTitle(data.title);
            setStartDate(data.startDate);
            setEndDate(data.endDate);
            setTechStack(data.techStack);
            setGifSrc(data.gifSrc);
            setImgSrc(data.imgSrc);
            setExplain(data.explain);
            setUrlLink(data.urlLink);
        }
    }, []);

    // 이미지 미리보기 기능
    const handleShowGifPreview = (event: any) => {
        setGifSrc(URL.createObjectURL(event.target.files[0]));
        setGifBlob(event.target.files[0]);
    };
    const handleShowImgPreview = (event: any) => {
        setImgSrc(URL.createObjectURL(event.target.files[0]));
        setImgBlob(event.target.files[0]);
    };

    // 미리보기 제거 기능
    const handleDeletePreview = (imgSrc: any, setImgSrc: Function) => {
        URL.revokeObjectURL(imgSrc);
        setImgSrc('');
    };

    // 미리보기를 통한 리소스 낭비 제거용
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
            {!editMode && <MDEditor.Markdown source={explain} />}
            <TagEdit techStack={techStack} setTechStack={setTechStack} editMode={editMode} />
            <LinkEdit urlLink={urlLink} setUrlLink={setUrlLink} editMode={editMode} />
            {projectId === 'add' ? <AddButton /> : <EditButton editMode={editMode} />}
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

const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    button {
        width: 30%;
        height: 3em;
        border: 1px solid black;
        margin: 1%;
    }
`;
