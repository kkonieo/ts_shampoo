import styled from 'styled-components';
import { aboutMeProps } from 'AboutMePageModuel';

const ResumeCard = ({ title, resumeDetail }: aboutMeProps.ResumeProps) => {
    return (
        <ResumeCardDiv>
            <CardTitle>{title}</CardTitle>
            <CardDetailArea>
                {resumeDetail.map((item) => {
                    return (
                        <DetailRowContainer>
                            <YearTitle>{item.year}</YearTitle>
                            <YearColumnDiv>
                                {item.detail.map((i) => (
                                    <YearRowDiv>
                                        <YearDot />
                                        <div>
                                            <DetailTitle>{i.detailTitle}</DetailTitle>
                                            <DetailDescribtion>{i.detailDescription}</DetailDescribtion>
                                        </div>
                                    </YearRowDiv>
                                ))}
                            </YearColumnDiv>
                        </DetailRowContainer>
                    );
                })}
            </CardDetailArea>
        </ResumeCardDiv>
    );
};

export default ResumeCard;

const ResumeCardDiv = styled.div`
    width: 100%;
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
    height: 400px;
    overflow: visible;
    padding: 10px;
    box-sizing: border-box;
    background-color: rgba(196, 196, 196, 0.4);
    border-radius: 0px 0px 8px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DetailRowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const YearTitle = styled.li`
    width: 50px;
    margin-bottom: 20px;
    list-style: none;
    font-size: 19px;
    font-weight: 600;
`;

const YearColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
`;

const YearRowDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const YearDot = styled.div`
    background-color: ${(props) => props.theme.color.main};
    width: 15px;
    height: 15px;
    border-radius: 15px;
    margin: 0px 5px 0px 10px;
`;

const DetailTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 2px;
`;

const DetailDescribtion = styled.div`
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 10px;
`;
