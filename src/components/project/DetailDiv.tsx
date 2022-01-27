import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import { navTheme } from '../../utils/styles/theme';

interface btnData {
    url: string;
    urlName: string;
}

const DetailDiv: React.FunctionComponent<ProjectProps.IProjectProps> = (props) => {
    const dt: btnData[] = [
        {
            url: 'https://youtube.com',
            urlName: 'youtube',
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
            <ExplainDiv>
                <b>프로젝트 설명</b>
                <br />
                <br />
                <span>{props.explain}</span>
            </ExplainDiv>
            <ExplainDiv>
                <b>기술 스택</b>
                <br />
                <br />
                {props.techStack.map((tech, idx) => (idx === 0 ? tech : ', ' + tech))}
            </ExplainDiv>
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
    margin-left: 5%;
    background-color: ${navTheme.color.background};
    border-radius: 15px;

    img {
        width: 100%;
        object-fit: contain;
    }
`;

const ExplainDiv = styled.div`
    margin-top: 5%;
    width: 90%;
`;
const ButtonDiv = styled.div`
    justify-content: start;
    font-family: 'Montserrat';
    button {
        margin: 5% 0;
        margin-right: 5%;
        width: 10em;
        background-color: ${navTheme.color.background};
        border-radius: 15px;
        border: none;
        font-weight: bold;
        height: 3em;
    }
`;
