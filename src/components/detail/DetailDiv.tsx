import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';

interface btnData {
    url: string;
    urlName: string;
}

const DetailDiv: React.FunctionComponent<ProjectProps.IProjectProps> = (props) => {
    const dt: btnData[] = [
        {
            url: 'https://youtube.com',
            urlName: 'Live Demo',
        },
        {
            url: 'https://github.com',
            urlName: 'github',
        },
    ];
    const handleWindowOpen = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <DetailContainer>
            <p>{`개발기간 : ${props.startDate} ~ ${props.endDate}`}</p>
            <GifDiv>
                <img src={`${props.gifSrc}`} alt="프로젝트 라이브 데모" />
            </GifDiv>
            <MDEditor.Markdown source={'# 프로젝트 설명\n 하하하 \n # 잘부탁해요'} />
            <ButtonDiv>
                {dt.map((d) => (
                    <button onClick={() => handleWindowOpen(d.url)}>{d.urlName}</button>
                ))}
            </ButtonDiv>
        </DetailContainer>
    );
};

export default DetailDiv;

const DetailContainer = styled.div`
    display: flex;
    font-family: 'EliceRegular', 'Montserrat', 'Helvetica', 'sans-serif';
    flex-direction: column;
    text-align: left;
    justify-content: center;
`;

const GifDiv = styled.div`
    width: 90%;
    margin-top: 2.5%;
    margin-bottom: 5%;
    margin-left: 5%;
    background-color: ${(props) => props.theme.color.background};
    border-radius: 15px;

    img {
        width: 100%;
        object-fit: contain;
    }
`;

const ButtonDiv = styled.div`
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
