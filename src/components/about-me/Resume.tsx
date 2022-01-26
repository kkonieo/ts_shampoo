import styled from 'styled-components';
import SubTitle from '../SubTitle';
import ResumeCard from './ResumeCard';

const Resume = () => {
    //타임라인 리스트
    const tmpTimeLine = [
        {
            year: 2019,
            detail: [
                {
                    detailTitle: '대학교 졸업',
                    detailDesribition: '대학교 졸업에 대한 세부 사항입니다',
                },
                {
                    detailTitle: '엘리스 AI 트랙',
                    detailDesribition: null,
                },
            ],
        },
        {
            year: 2020,
            detail: [
                {
                    detailTitle: '대학교 졸업',
                    detailDesribition: '대학교 졸업에 대한 세부 사항',
                },
                {
                    detailTitle: '엘리스 AI 트랙',
                    detailDesribition: '엘리스 AI 트랙에 대한 세부 사항입니다.',
                },
            ],
        },
        {
            year: 2021,
            detail: [
                {
                    detailTitle: 'string',
                    detailDesribition: 'string',
                },
                {
                    detailTitle: 'string',
                    detailDesribition: null,
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
