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
            {source && (
                <ImgDiv>
                    <img alt={alt} src={source ?? `${process.env.PUBLIC_URL}/img/default.png}`} />
                    {editMode && (
                        <button>
                            <img
                                onClick={() => {
                                    setSrc('');
                                }}
                                src={`${process.env.PUBLIC_URL}/img/close.svg`}
                                alt="닫기"
                            />
                        </button>
                    )}
                </ImgDiv>
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
    flex-direction: column;
    justify-content: center;

    img {
        border-radius: 15px;
    }
`;

const ImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1.5%;
    button {
        position: absolute;
        border: 0px;
        right: 0px;
        top: 0px;
        border: none;
    }
`;
