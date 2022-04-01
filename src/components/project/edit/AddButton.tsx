import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AddButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <ButtonDiv>
                <button type="submit">추가</button>

                <button type="button" onClick={() => navigate(-1)}>
                    취소
                </button>
            </ButtonDiv>
        </>
    );
};

export default AddButton;

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
