import styled from 'styled-components';
import { aboutMeProps } from 'AboutMePageModuel';

const ResumeCard = ({ title, resumeDetail }: aboutMeProps.ResumeProps) => {
    return (
        <ResumeCardDiv>
            <CardTitle>{title}</CardTitle>
            <CardDetailArea></CardDetailArea>
        </ResumeCardDiv>
    );
};

export default ResumeCard;

const ResumeCardDiv = styled.div`
    width: 100%;
    height: 200px; /* TODO : 추후 높이 세부 설정*/
    margin: 20px 5px;
`;

const CardTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px 8px 0px 0px;
    box-sizing: border-box;
    padding: 8px;
    background-color: #f5f5f5;
`;

const CardDetailArea = styled.div`
    overflow: auto;
    padding: 10px;
    box-sizing: border-box;
    background-color: rgba(196, 196, 196, 0.4);
    border-radius: 0px 0px 8px 8px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DetailContentItem = styled.li`
    list-style: none;
    transform: matrix();
`;
