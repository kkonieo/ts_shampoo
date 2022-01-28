import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import { ProjectProps } from 'ProjectPageModule';

interface IProps extends ProjectProps.IProjectProps {}

const ProjectCard: React.FunctionComponent<IProps> = ({ ...props }) => {
    const [gifToggle, setGifToggle] = useState<boolean>(false);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleGifPlayer = () => {
        setGifToggle((current) => !current);
    };
    return (
        <ProjectCardDiv>
            <div className="project" onMouseOver={handleGifPlayer} onMouseOut={handleGifPlayer}>
                <img alt={props.title} ref={imgRef} src={gifToggle ? `${props?.gifSrc}` : `${props?.imgSrc}`} />
            </div>
            <div className="explain">
                <p>
                    <b>{props?.title}</b>
                </p>

                {/*
                길이가 일정이상 길면 뒷부분을 ...으로 대체한다
                */}
                <p>{`제작기간 :  ${props.startDate} ~ ${props.endDate}`}</p>
                <p>{`기술스택 :  ${
                    props.techStack.join(',').length < 25
                        ? props.techStack.join(', ')
                        : props.techStack.join(', ').substring(0, 25) + '...'
                }`}</p>
            </div>
        </ProjectCardDiv>
    );
};

export default ProjectCard;
const ProjectCardDiv = styled.div`
    border-radius: 15px;
    display: flex;
    
    flex-direction: column;
    border 1px solid #BDBDBD;
    overflow: hidden;
    width:90%;

    .project {
        background-color:#F5F5F5;
        video{
            width:100%;
            object-fit:contain;    
        }
        height:60%;
        img {
            width:100%;
            object-fit:scale-down;
        }
    }

    .explain {
        padding : 1%;
        padding-left:3%;
        text-align:left;
        background-color:white;
        color:#757575;
        b{
            color:black;
        }
        float:bottom;
        
`;
