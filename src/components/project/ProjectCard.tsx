import styled from 'styled-components';
import React from 'react';

type ExplainProps = {
    imgSrc?: string;
    title: string;
    body: Array<string>;
};

const ProjectCard: React.FunctionComponent<ExplainProps> = (props) => {
    return (
        <ProjectCardDiv>
            <div className="project">
                <img src={`${process.env.PUBLIC_URL}/img/${props?.imgSrc}`} alt={props?.title} />
            </div>
            <div className="explain">
                <p>
                    <b>{props?.title}</b>
                </p>
                {props?.body.map((explain: string) => (
                    <p>{explain}</p>
                ))}
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
        img{
            width:100%;
            object-fit:scale-down;
        }
    }
    .explain {
        padding : 1vh;
        padding-left:3%;
        text-align:left;
        background-color:white;
        color:#757575;
        b{
            color:black;
        }

        
`;
