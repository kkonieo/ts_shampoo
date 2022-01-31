interface EditProps {
    source?: string;
    setSrc: (...args: any[]) => any;
    handleShowPreview: (...args: any[]) => any;
    alt: string;
    accept: string;
}
const ImgEdit = ({ source, setSrc, handleShowPreview, alt, accept }: EditProps) => {
    return (
        <div>
            {source && (
                <>
                    <img alt={alt} src={source} />

                    <button onClick={() => setSrc('')}>제거</button>
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
