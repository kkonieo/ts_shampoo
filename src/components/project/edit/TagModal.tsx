import styled from 'styled-components';
import { useState } from 'react';

interface IProps {
    isModalOpen: boolean;
    setIsModalOpen: (arg: boolean) => void;
    techStack: string[];
    setTechStack: (args: string[]) => void;
}
const TagModal = ({ isModalOpen, setIsModalOpen, techStack, setTechStack }: IProps) => {
    const [modalInput, setModalInput] = useState<string>('');
    const handleCloseModal = () => {
        if (isModalOpen === true) return setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <Div>
                    <ModalDiv>
                        <br />
                        <input
                            type="text"
                            value={modalInput}
                            onChange={(e) => setModalInput(e.target.value)}
                            placeholder="기술스택을 입력해주세요"
                        />
                        <br />
                        <ButtonDiv>
                            <button
                                onClick={() => {
                                    if (modalInput === '') return;
                                    const newTechStack = [...techStack];
                                    newTechStack.push(modalInput);
                                    setTechStack(newTechStack);
                                    setModalInput('');
                                    handleCloseModal();
                                }}
                            >
                                입력
                            </button>
                            <button onClick={handleCloseModal}>닫기</button>
                        </ButtonDiv>
                    </ModalDiv>
                </Div>
            )}
        </>
    );
};

export default TagModal;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
`;

const ModalDiv = styled.div`
    border-radius: 15px;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2% 5%;
    flex-direction: column;
    background-color: ${(props) => props.theme.color.main};

    font-size: 1em;
`;

const ButtonDiv = styled.div`
    display: flex;
    margin: 2%;
    button {
        border: 0px;
        font-weight: bold;
        width: 5em;
        height: 3em;
        margin: 2%;
        background-color: ${(props) => props.theme.color.sub};
    }
`;
