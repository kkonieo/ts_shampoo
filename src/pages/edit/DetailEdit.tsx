import { useEffect, useState } from 'react';
import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import TitleEdit from '../../components/edit/TitleEdit';

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
                {urlLink && urlLink.map((link) => <button type="button">{link.linkName}</button>)}
                <div>
                    <button type="submit">수정</button>
                    <button type="button" onClick={props?.handleChangeToggle}>
                        취소
                    </button>
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
