import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

interface IProps {
    data: ProjectProps.IProjectProps[];
    editMode?: boolean;
    handleSubmit?: (...args: any[]) => any;
}

const ProjectDiv = ({ data, editMode }: IProps) => {
    return (
        <GridDiv>
            {data.map((project, idx) => {
                return (
                    <Link to={`${idx}`}>
                        <ProjectCard key={project.title + idx} {...project} />
                    </Link>
                );
            })}
        </GridDiv>
    );
};
export default ProjectDiv;
const GridDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    a {
        text-decoration: none;
    }
`;
