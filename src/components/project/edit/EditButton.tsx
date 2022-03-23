import styled from 'styled-components';

interface IProps {
    editMode: boolean;
}
const EditButton = ({ editMode }: IProps) => {
    return (
        <>
            {editMode && (
                <ButtonDiv>
                    <button type="submit">수정</button>

                    <button
                        type="button"
                        onClick={(e: any) => {
                            e.preventDefault();
                            console.log('삭제');
                        }}
                    >
                        삭제
                    </button>
                    <button type="button" onClick={() => window.location.reload()}>
                        취소
                    </button>
                </ButtonDiv>
            )}
        </>
    );
};

export default EditButton;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    button {
        width: 30%;
        height: 3em;
        border: 1px solid black;
        margin: 1%;
    }
`;
