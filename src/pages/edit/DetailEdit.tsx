import { useEffect, useState } from 'react';
import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import TitleEdit from '../../components/edit/TitleEdit';
import DateEdit from '../../components/edit/DateEdit';
import { ImgEdit } from '../../components/edit';
interface IProps extends ProjectProps.IProjectProps {
    handleChangeToggle?: (...args: any[]) => any;
}

const DetailEdit: React.FunctionComponent<IProps> = (props) => {
    const [title, setTitle] = useState(props.title);
    const [startDate, setStartDate] = useState(props.startDate);
    const [endDate, setEndDate] = useState(props.endDate);
    const [explain, setExplain] = useState(props.explain);
    const [gifSrc, setGifSrc] = useState(props.gifSrc);
    const [imgSrc, setImgSrc] = useState(props.imgSrc);
    const [techStack, setTechStack] = useState(props.techStack);
    const [urlLink, setUrlLink] = useState(props.urlLink);

    const handleSubmit = (event: any) => {
        event?.preventDefault();
        const data = {
            projectId: props.id,
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
                        <Tag>{stack}</Tag>
                    ))}
                    <Tag onClick={() => console.log('스택 추가')}>+</Tag>
                </TagDiv>
            </StackDiv>
            <LinkDiv>
                {urlLink && urlLink.map((link) => <button type="button">{link.linkName}</button>)}
                <button type="button" onClick={() => console.log('링크 추가')}>
                    +
                </button>
            </LinkDiv>
            <div>
                <button type="submit">수정</button>
                <button type="button" onClick={props?.handleChangeToggle}>
                    취소
                </button>
            </div>
        </DetailForm>
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
`;
const Tag = styled.div`
    margin: 2%;
    background-color: ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.sub};
    padding: 2%;
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
`;
