import { ProjectProps } from 'ProjectPageModule';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

interface IProps {
    data: ProjectProps.ProjectDetail[];
    editMode?: boolean;
    handleSubmit?: (...args: any[]) => any;
}

const ProjectDiv = ({ data, editMode, handleSubmit }: IProps) => {
    return (
        <form onSubmit={handleSubmit}>
            <GridDiv>
                {data.map((project, idx) => {
                    return (
                        <Link to={`${idx}`} key={project.title + idx}>
                            <ProjectCard {...project} />
                        </Link>
                    );
                })}
                {editMode && (
                    <Link to={'add'}>
                        <AddButton>
                            <img src={`${process.env.PUBLIC_URL}/img/plus.svg`} alt="프로젝트 추가" />
                        </AddButton>
                    </Link>
                )}
            </GridDiv>
            {editMode && (
                <ButtonDiv>
                    <button type="submit">수정</button>
                    <button type="button" onClick={() => window.location.reload()}>
                        취소
                    </button>
                </ButtonDiv>
            )}
        </form>
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

const AddButton = styled.button`
    border-radius: 3.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #bdbdbd;
    overflow: hidden;
    width: 90%;
    height: 90%;
    margin: 4%;
    background-color: ${(props) => props.theme.color.background};

    img {
        object-fit: cover;
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 100%;
    button {
        width: 30%;
        height: 3em;
        border: 1px solid black;
        margin: 1%;
    }
`;
