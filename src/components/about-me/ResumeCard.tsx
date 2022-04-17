import styled, { css, keyframes } from 'styled-components';
import { aboutMeProps } from 'AboutMePageModuel';
import React from 'react';

interface Props {
    editMode: boolean;
}

const ResumeCard = ({ title, resumeDetail, isEditMode }: aboutMeProps.ResumeProps) => {
    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.effectAllowed = 'move';
        console.log('드래그됨');
    };

    return (
        <ResumeCardDiv>
            <CardTitle>{title}</CardTitle>
            <CardDetailArea>
                {/*TODO : Same key 값 가지는 오류 수정 */}
                {resumeDetail.map((item, idx) => {
                    return (
                        <DetailRowContainer className="test" key={idx}>
                            <YearTitle>{item.year}</YearTitle>
                            <YearColumnDiv>
                                {item.detail.map((i, idx) => (
                                    <YearRowDiv
                                        draggable={isEditMode ? true : false}
                                        key={idx}
                                        onDrag={onDragStart}
                                        editMode={isEditMode}
                                    >
                                        {isEditMode && <CardDelete editMode={isEditMode}>x</CardDelete>}
                                        <YearDot />
                                        <div>
                                            <DetailTitle>{i.detailTitle}</DetailTitle>
                                            <DetailDescribtion>{i.detailDescriptions}</DetailDescribtion>
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
    min-height: 400px;
    padding: 15px 10px;
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
    padding: 0;
    list-style: none;
    font-size: 19px;
    font-weight: 600;
`;

const YearColumnDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
`;

const YearRowDiv = styled.div<Props>`
    width: 80%;
    position: relative;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    background-color: #fff;
    margin: 2px 0px;
    padding: 5px 3px;
    box-sizing: border-box;

    ${(props) =>
        props.editMode &&
        css`
            animation: ${shakeIcon} 1s infinite;
        `}
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

const CardDelete = styled.div<Props>`
    display: inline-block;
    text-align: center;
    width: 20px;
    height: auto;
    position: absolute;
    border-radius: 50%;
    z-index: 5;
    border: 1px solid;
    color: black;
    top: -9px;
    right: -1px;
    background-color: #fff;
    :hover {
        background-color: rgba(188, 188, 188, 0.8);
    }
    ${(props) =>
        props.editMode &&
        css`
            animation: ${shakeIcon} 1s infinite;
        `}
`;

const shakeIcon = keyframes`
	0%{
		transform: translate(1px, 1px) rotate(0deg);
	}
	10%{
		transform: translate(-1px, -1px) rotate(0.5deg);
	}
	20%{
		transform: translate(-1px, 1px) rotate(-0.5deg);
	}
	30%{
		transform: translate(1px, 1px) rotate(0deg);
	}
	40%{
		transform: translate(-1px, 1px) rotate(0.5deg);
	}
	50%{
		transform: translate(1px, -1px) rotate(-0.5deg);
	}
	60%{
		transform: translate(1px, 1px) rotate(0.5deg);
	}
	70%{
		transform: translate(-1px, 1px) rotate(0.5deg);
	}
	80%{
		transform: translate(1px, -1px) rotate(0.5deg);
	}
	90%{
		transform: translate(-1px, 1px) rotate(0deg);
	}
	100%{
		transform: translate(1px, 1px) rotate(-0.5deg);
	}
`;
