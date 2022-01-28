import ProjectCard from './ProjectCard';
import { ProjectProps } from 'ProjectPageModule';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IProps {
    data: ProjectProps.IProjectProps[];
    editMode?: boolean;
}
const ProjectCardDiv = ({ data, editMode }: IProps) => {
    return (
        <GridDiv>
            {!editMode &&
                data.map((project, idx) => {
                    return (
                        <Link to={`${idx}`}>
                            <ProjectCard key={project.title + idx} {...project} />
                        </Link>
                    );
                })}
            {editMode &&
                data.map((project, idx) => {
                    return <ProjectCard key={project.title + idx} {...project} />;
                })}
        </GridDiv>
    );
};

export default ProjectCardDiv;

const GridDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.5%;
    a {
        text-decoration: none;
    }
`;