import { useState } from 'react';
import styled from 'styled-components';
import TagModal from './TagModal';
interface Props {
    techStack: string[];
    setTechStack: (args: string[]) => void;
    editMode?: boolean;
}
const LinkEdit = ({ techStack, setTechStack, editMode }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
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
                                <button
                                    onClick={() => {
                                        const newTechStack = [];
                                        for (let i: number = 0; i < techStack.length; i++) {
                                            if (i !== idx) {
                                                newTechStack.push(techStack[i]);
                                            }
                                        }
                                        setTechStack(newTechStack);
                                    }}
                                >
                                    <img src={`${process.env.PUBLIC_URL}/img/close.svg`} alt="닫기" />
                                </button>
                            )}
                        </Tag>
                    ))}
                {editMode && <Tag onClick={handleOpenModal}>+</Tag>}
            </TagDiv>
            <TagModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                techStack={techStack}
                setTechStack={setTechStack}
            />
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
    justify-content: start;
    align-items: center;
`;
const Tag = styled.div`
    position: relative;
    text-align: center;
    margin: 1%;
    padding: 3%;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.sub};

    border-radius: 5px;
    button {
        position: absolute;
        border: 0px;
        right: 0px;
        top: 0px;
        border: none;
    }
`;
