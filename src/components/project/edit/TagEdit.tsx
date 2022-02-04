import { useState } from 'react';
import styled from 'styled-components';
interface Props {
    techStack: string[];
    setTechStack: (args: string[]) => void;
    editMode?: boolean;
}
const LinkEdit = ({ techStack, setTechStack, editMode }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalInput, setModalInput] = useState<string>('');
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        if (isModalOpen === true) return setIsModalOpen(false);
    };

    return (
        <StackDiv>
            <h2>기술 스택</h2>
            <TagDiv>
                {techStack &&
                    techStack.map((stack, idx) => (
                        <Tag>
                            {stack}
                            {editMode && (
                                <img
                                    onClick={() => {
                                        const newTechStack = [];
                                        for (let i: number = 0; i < techStack.length; i++) {
                                            if (i !== idx) {
                                                newTechStack.push(techStack[i]);
                                            }
                                        }
                                        setTechStack(newTechStack);
                                    }}
                                    src={`${process.env.PUBLIC_URL}/img/close.svg`}
                                    alt="닫기"
                                />
                            )}
                        </Tag>
                    ))}
                {editMode && <Tag onClick={handleOpenModal}>+</Tag>}
                {isModalOpen && (
                    <div>
                        <input
                            type="text"
                            value={modalInput}
                            onChange={(e) => setModalInput(e.target.value)}
                            placeholder="기술스택을 입력해주세요"
                        />
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
                        <button onClick={handleCloseModal}>모달창 닫기</button>
                    </div>
                )}
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
    justify-content: center;
    align-items: center;
`;
const Tag = styled.div`
    position: relative;
    min-width: 20%;
    text-align: center;
    margin: 2%;
    background-color: ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.sub};
    padding: 3%;
    img {
        position: absolute;
        right: 0;
        top: 0;
    }
`;
