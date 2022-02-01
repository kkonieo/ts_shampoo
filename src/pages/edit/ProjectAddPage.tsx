import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import TitleEdit from '../../components/edit/TitleEdit';
import DateEdit from '../../components/edit/DateEdit';
import { ImgEdit } from '../../components/edit';
import { SubTitleEdit } from '../../components';
import { Link } from 'react-router-dom';

interface IUrl {
    linkName: string;
    linkUrl: string;
}

const ProjectAddPage = () => {
    // 초기 데이터
    const today = new Date(); // 올해의 첫날과 마지막날을 시작일과 종료일로 자동 지정한다. 이를 위한 Date
    const [title, setTitle] = useState<string>('프로젝트명');
    const [startDate, setStartDate] = useState<string>(`${today.getFullYear()}-01-01`);
    const [endDate, setEndDate] = useState<string>(`${today.getFullYear()}-12-31`);
    const [explain, setExplain] = useState<string>('');
    const [gifSrc, setGifSrc] = useState<string>('');
    const [imgSrc, setImgSrc] = useState<string>('');
    const [techStack, setTechStack] = useState<string[]>([]);
    const [urlLink, setUrlLink] = useState<IUrl[]>([]);

    // 이미지 파일 저장용 state
    const [gifBlob, setGifBlob] = useState<Blob>();
    const [imgBlob, setImgBlob] = useState<Blob>();

    // urlLink 추가용 모달, TechStack추가용 모달
    const [urlModal, setUrlModal] = useState<boolean>(false);
    const [techModal, setTechModal] = useState<boolean>(false);

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        const data = {
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
        <>
            <SubTitleEdit text={`📂 Project`} editMode={true} />
            <DetailForm onSubmit={handleSubmit}>
                <TitleEdit title={title} setTitle={setTitle} />
                <DateEdit startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
                <ImgEdit
                    source={gifSrc}
                    alt="라이브 데모 GIF"
                    setSrc={setGifSrc}
                    handleShowPreview={handleShowGifPreview}
                    accept="gif,"
                />
                <ImgEdit
                    source={imgSrc}
                    alt="프로젝트 이미지"
                    setSrc={setImgSrc}
                    handleShowPreview={handleShowImgPreview}
                    accept="png, .jpg, .jpeg, .svg"
                />
                <h2>프로젝트 설명</h2>
                <MDEditor
                    height={window.innerHeight * 0.3}
                    value={explain}
                    onChange={(newValue = '') => setExplain(newValue)}
                />
                <MDEditor.Markdown source={explain} />
                <StackDiv>
                    <h2>기술 스택</h2>
                    <TagDiv>
                        {techStack.map((stack) => (
                            <button type="button">{stack}</button>
                        ))}
                        <button type="button" onClick={() => setTechModal(true)}>
                            +
                        </button>
                    </TagDiv>
                </StackDiv>
                <LinkDiv>
                    {urlLink &&
                        urlLink.map((link) => (
                            <button type="button">
                                <a href={link.linkUrl}>{link.linkName}</a>
                            </button>
                        ))}
                    <button type="button" onClick={() => setUrlModal(true)}>
                        +
                    </button>
                </LinkDiv>
                <div>
                    <button type="submit">추가</button>
                    <Link to="..">
                        <button type="button">취소</button>
                    </Link>
                </div>
            </DetailForm>
        </>
    );
};

export default ProjectAddPage;

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
        margin-left: auto;
    }

    h2 {
        border-bottom: 1px solid black;
        margin: 2% 0;
    }
`;

const StackDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`;
const TagDiv = styled.div`
    display: flex;
    button {
        margin: 2%;
        background-color: ${(props) => props.theme.color.main};
        color: ${(props) => props.theme.color.sub};
        padding: 2%;
    }
`;

const LinkDiv = styled.div`
    justify-content: start;
    font-family: 'Montserrat';
    button {
        margin: 5% 0;
        margin-right: 5%;
        width: 10em;
        background-color: ${(props) => props.theme.color.background};
        border-radius: 15px;
        border: none;
        font-weight: bold;
        height: 3em;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;
