import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';

interface Props {
    urlLink: ProjectProps.IUrl[];
    setUrlLink: (args: ProjectProps.IUrl[]) => void;
    editMode?: boolean;
}
const LinkEdit = ({ urlLink, setUrlLink, editMode }: Props) => {
    return (
        <Div>
            <h2>참조 사이트</h2>
            {urlLink && urlLink.map((link) => <button type="button">{link.linkName}</button>)}
            {editMode && (
                <button type="button" onClick={() => console.log('링크 추가')}>
                    +
                </button>
            )}
        </Div>
    );
};

export default LinkEdit;

const Div = styled.div`
    justify-content: start;
    font-family: 'Montserrat';
    border: none;

    button {
        margin: 2.5% 5% 5% 0;

        width: 10em;
        background-color: ${(props) => props.theme.color.background};
        border-radius: 15px;
        border: none;
        font-weight: bold;
        height: 3em;
    }
`;
