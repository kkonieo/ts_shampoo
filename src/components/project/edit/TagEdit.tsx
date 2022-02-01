import styled from 'styled-components';
interface Props {
    techStack: string[];
    setTechStack: (args: string[]) => void;
    editMode?: boolean;
}
const LinkEdit = ({ techStack, setTechStack, editMode }: Props) => {
    return (
        <StackDiv>
            <h2>기술 스택</h2>
            <TagDiv>
                {techStack && techStack.map((stack) => <Tag>{stack}</Tag>)}
                {editMode && <Tag onClick={() => console.log('스택 추가')}>+</Tag>}
            </TagDiv>
        </StackDiv>
    );
};

export default LinkEdit;
const StackDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`;
const TagDiv = styled.div`
    display: flex;
`;
const Tag = styled.div`
    margin: 2%;
    background-color: ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.sub};
    padding: 2%;
`;
