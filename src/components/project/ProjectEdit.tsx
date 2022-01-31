import { ProjectProps } from 'ProjectPageModule';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

interface IProps {
    data: ProjectProps.IProjectProps[];
    editMode?: boolean;
    handleSubmit?: (...args: any[]) => any;
}

const ProjectEdit = ({ data, editMode }: IProps) => {
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
export default ProjectEdit;
const GridDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.5%;
    a {
        text-decoration: none;
    }
`;

const AddCard = styled.div`
border-radius: 3.5%;
display: flex;
flex-direction: column;
border 1px solid #BDBDBD;
overflow: hidden;
background-color:${(props) => props.theme.color.background}
`;
