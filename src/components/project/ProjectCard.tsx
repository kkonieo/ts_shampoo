import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';

type ProjectProps = {
    imgSrc?: string;
    title: string;
    body: Array<string>;
};

const ProjectCard: React.FunctionComponent<ProjectProps> = (props) => {
    const [playerState, setPlayerState] = useState<boolean>(false);
    const [gifState, setGifState] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!videoRef.current) {
            return;
        } else {
            videoRef.current.src = `${process.env.PUBLIC_URL}/video/Test.mp4`;
        }
        if (!imgRef.current) {
            return;
        } else {
            imgRef.current.src = 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original';
        }
    }, []);

    const handleGifPlayer = () => {
        setGifState((current) => !current);
    };
    return (
        <ProjectCardDiv>
            <div className="project" onMouseOver={handleGifPlayer} onMouseOut={handleGifPlayer}>
                <img
                    alt={props?.title}
                    ref={imgRef}
                    src={
                        gifState
                            ? 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original'
                            : 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original'
                    }
                />
            </div>
            <div className="explain">
                <p>
                    <b>{props?.title}</b>
                </p>
                {props?.body.map((explain: string) => (
                    <p>{explain.length < 38 ? explain : explain.substring(0, 35) + '...'}</p>
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
