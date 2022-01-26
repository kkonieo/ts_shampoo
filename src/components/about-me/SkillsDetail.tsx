import styled from 'styled-components';
import { aboutMeProps } from 'AboutMePageModuel';

const SkillsDetail = ({ skillTitles, skillDescribes }: aboutMeProps.SkillsProps) => {
    return (
        <Div>
            <DetailTitle>{skillTitles}</DetailTitle>
            <DetailContentsArea>
                {/* 클릭시에 바뀌도록 구현 예정*/}
                {skillTitles === '' ? (
                    <EmptyDetail>자세히 알고싶다면 스킬을 클릭해보세요!</EmptyDetail>
                ) : (
                    skillDescribes.map((item, idx) => <DetailContentItem key={idx}>{item}</DetailContentItem>)
                )}
            </DetailContentsArea>
        </Div>
    );
};

export default SkillsDetail;

const Div = styled.div`
    width: 100%;
    height: 200px; /* TODO : 추후 높이 세부 설정*/
    margin: 20px 0px;
`;

const DetailTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px 8px 0px 0px;
    box-sizing: border-box;
    padding: 8px;
    background-color: #f5f5f5;
`;

const DetailContentsArea = styled.div`
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

const EmptyDetail = styled.div`
    font-size: 17px;
    font-weight: 500;
`;
