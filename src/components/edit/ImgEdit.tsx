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
        <div>
            {source && (
                <>
                    <img alt={alt} src={source} />

                    {editMode && <button onClick={() => setSrc('')}>제거</button>}
                </>
            )}
            {!source && (
                <label>
                    <input type="file" accept={`image/${accept}`} onChange={handleShowPreview} name="source" />
                </label>
            )}
        </div>
    );
};

export default ImgEdit;
