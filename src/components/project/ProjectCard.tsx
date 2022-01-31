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
                <div>
                    <b>{props?.title}</b>
                </div>

                {/*
                길이가 일정이상 길면 뒷부분을 ...으로 대체한다
                */}
                <div>{`제작기간 :  ${props.startDate.replace(/-/gi, '.')} ~ ${props.endDate.replace(/-/gi, '.')}`}</div>
                <div>{`기술스택 :  ${
                    props.techStack.join(',').length < 25
                        ? props.techStack.join(', ')
                        : props.techStack.join(', ').substring(0, 25) + '...'
                }`}</div>
            </div>
        </ProjectCardDiv>
    );
};

export default ProjectCard;
const ProjectCardDiv = styled.div`
    border-radius: 3.5%;
    display: flex;
    flex-direction: column;
    border 1px solid #BDBDBD;
    overflow: hidden;
    width:90%;

    .project {
        background-color:#F5F5F5;
        width:100%;
        img {
            object-fit:cover;
        }
    }

    .explain {
        display:flex;
        flex-direction:column;
        padding : 1%;
        padding-left:3%;
        text-align:left;
        background-color:white;
        color:#757575;
        div{
            margin:0.5%;
        }
        b{
            color:black;
        }
        float:bottom;
        
`;
