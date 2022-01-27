import styled from 'styled-components';
import SubTitle from '../SubTitle';
import ResumeCard from './ResumeCard';

const Resume = () => {
    //타임라인 리스트
    //year은 선택, 단 year이 없으면 해당 년도에는 추가할 수 없음
    //year이 존재한다면 해당 년도에 무조건 하나는 detail이 있어야함 (detailDescribtion은 선택)
    /*
    [
        {
            year: number (선택),
            detail: [
                {
                    detailTitle: '2019 대학교 졸업',
                    detailDesribtion: '대학교 졸업에 대한 세부 사항입니다', (선택)
                },
                {
                    detailTitle: '2019 엘리스 AI 트랙',
                    detailDesribtion: null,
                },
            ],
        },
    ]
    */
    const tmpTimeLine = [
        {
            year: 2019,
            detail: [
                {
                    detailTitle: '2019 대학교 졸업',
                    detailDescription: '대학교 졸업에 대한 세부 사항입니다',
                },
                {
                    detailTitle: '2019 엘리스 AI 트랙',
                    detailDescription: null,
                },
            ],
        },
        {
            year: 2020,
            detail: [
                {
                    detailTitle: '2020 대학교 졸업',
                    detailDescription: '대학교 졸업에 대한 세부 사항',
                },
                {
                    detailTitle: '엘리스 AI 트랙',
                    detailDescription: '엘리스 AI 트랙에 대한 세부 사항입니다.',
                },
            ],
        },
        {
            year: 2021,
            detail: [
                {
                    detailTitle: 'string',
                    detailDescription: 'string',
                },
                {
                    detailTitle: 'string',
                    detailDescription: null,
                },
            ],
        },
    ];

    //수상 리스트

    return (
        <Div>
            <SubTitle text="💼 Resume" />
            <ResumeCardArea>
                <ResumeCard title="🕰 TimeLine" resumeDetail={tmpTimeLine} />
                <ResumeCard title="👑 Certificate & Awards" resumeDetail={tmpTimeLine} />
            </ResumeCardArea>
        </Div>
    );
};

export default Resume;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
`;

const ResumeCardArea = styled.div`
    display: flex;
    flex-direction: row;
`;
