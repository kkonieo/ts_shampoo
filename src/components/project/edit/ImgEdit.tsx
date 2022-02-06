import styled from 'styled-components';
interface EditProps {
    source?: string;
    setSrc: (...args: any[]) => any;
    handleShowPreview: (...args: any[]) => any;
    alt: string;
    accept: string;
    editMode?: boolean;
}
const ImgEdit = ({ source, setSrc, handleShowPreview, alt, accept, editMode }: EditProps) => {
    return (
        <Div>
            {!editMode && (
                <>
                    <img alt={alt} src={source ?? `${process.env.PUBLIC_URL}/img/default.png}`} />
                    {editMode && <button onClick={() => setSrc('')}>제거</button>}
                </>
            )}
            {editMode && (
                <label>
                    <input type="file" accept={`image/${accept}`} onChange={handleShowPreview} name="source" />
                </label>
            )}
        </Div>
    );
};

export default ImgEdit;

const Div = styled.div`
    display: flex;
    justify-content: center;

    img {
        border-radius: 15px;
    }
`;
