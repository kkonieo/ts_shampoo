import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
const DetailDiv: React.FunctionComponent<ProjectProps.IProjectProps> = (props) => {
    const handleWindowOpen = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <DetailContainer>
            <TitleDiv>{props.title}</TitleDiv>
            <p>{`제작 기간 : ${props.startDate.replace(/-/gi, '.')} ~ ${props.endDate.replace(/-/gi, '.')}`}</p>
            <GifDiv>
                <img src={`${props.gifSrc}`} alt="라이브 데모" />
            </GifDiv>
            <ExplainDiv>
                <h2>프로젝트 설명</h2>
                <MDEditor.Markdown source={props.explain} />
            </ExplainDiv>
            <StackDiv>
                <h2>기술 스택</h2>
                <TagDiv>
                    {props.techStack.map((stack) => (
                        <Tag>{stack}</Tag>
                    ))}
                </TagDiv>
            </StackDiv>

            <LinkDiv>
                {props.urlLink &&
                    props.urlLink.map((url) => (
                        <button onClick={() => handleWindowOpen(url.linkUrl ?? '')}>{url.linkName}</button>
                    ))}
            </LinkDiv>
        </DetailContainer>
    );
};

export default DetailDiv;

const DetailContainer = styled.div`
    display: flex;
    font-family: 'EliceRegular', 'Montserrat', 'Helvetica', 'sans-serif';
    flex-direction: column;
    padding: 0 5%;
    text-align: left;
    justify-content: center;
    p {
        font-size: 1.5em;
        color: #757575;
    }
    h2 {
        border-bottom: 1px solid black;
        margin-bottom: 2%;
    }
`;

const TitleDiv = styled.div`
    font-weight: bold;
    font-size: 2em;
`;
const GifDiv = styled.div`
    margin-top: 3%;
    margin-bottom: 5%;
    background-color: ${(props) => props.theme.color.background};
    border-radius: 10px;
    overflow: hidden;

    img {
        width: 100%;
        object-fit: contain;
    }
`;
const ExplainDiv = styled.div`
    p {
        color: #3a3a3a;
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
