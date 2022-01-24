import { ProjectCardDiv } from '../../components/project';
import styled from 'styled-components';
const ProjectPage = () => {
    return (
        <Div>
            <ProjectCardDiv />
        </Div>
    );
};

export default ProjectPage;

const Div = styled.div`
    overflow: visible;
`;
