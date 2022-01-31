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
            <Link to={'add'}>
                <AddButton>
                    <img src={`${process.env.PUBLIC_URL}/img/plus.svg`} alt="추가" />
                </AddButton>
            </Link>
        </GridDiv>
    );
};
export default ProjectEdit;
const GridDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    a {
        text-decoration: none;
    }
`;

const AddButton = styled.button`
    border-radius: 3.5%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border 1px solid #BDBDBD;
    overflow: hidden;
    width:90%;
    height:90%;
    margin:4%;
    background-color:${(props) => props.theme.color.background};

    img{
        object-fit:cover;
    }
`;
