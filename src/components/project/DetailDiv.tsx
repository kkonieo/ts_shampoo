import { IProjectProps } from './ProjectCard';
import styled from 'styled-components';
import { navTheme } from '../../utils/styles/theme';

interface btnData {
    url: string;
    urlName: string;
}

const DetailDiv: React.FunctionComponent<IProjectProps> = (props) => {
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
    const data: string =
        '엘리스 AI트랙에서 진행한 프로젝트로 사람들의 삶을 윤택하기 위해 최신 기술을 이용하여 구현했습니다. 이러한 경우에 타겟은 모든 사람입니다. 엘리스 AI트랙에서 진행한 프로젝트로 사람들의 삶을 윤택하기 위해 최신 기술을 이용하여 구현했습니다. 이러한 경우에 타겟은 모든 사람입니다. 엘리스 AI트랙에서 진행한 프로젝트로 사람들의 삶을 윤택하기 위해 최신 기술을 이용하여 구현했습니다. 이러한 경우에 타겟은 모든 사람입니다.';
    return (
        <DetailContainer>
            <h2>{props.title}</h2>
            <Hr />
            <p>{`개발기간 : ${props.startDate} ~ ${props.endDate}`}</p>
            <GifDiv>
                <img
                    src="https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original"
                    alt="프로젝트 라이브 데모"
                />
            </GifDiv>
            <ExplainDiv>
                <b>프로젝트 설명</b>
                <br />
                <br />
                <span>{data}</span>
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

const Hr = styled.hr`
    border-color: ${navTheme.color.background};
    width: 100%;
    margin-left: 0;
    margin: auto;
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
