import styled from 'styled-components';
import { ProjectProps } from 'ProjectPageModule';
import { useState } from 'react';

interface IProps {
    isModalOpen: boolean;
    setIsModalOpen: (arg: boolean) => void;
    urlLink: ProjectProps.UrlLink[];
    setUrlLink: (arg: ProjectProps.UrlLink[]) => void;
}
const LinkModal = ({ urlLink, setUrlLink, isModalOpen, setIsModalOpen }: IProps) => {
    const [modalUrlInput, setModalUrlInput] = useState<string>('');
    const [modalNameInput, setModalNameInput] = useState<string>('');
    const handleCloseModal = () => {
        if (isModalOpen === true) return setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <ModalDiv>
                    <div className="inputDiv">
                        <label>
                            링크 주소 :
                            <input
                                type="text"
                                value={modalUrlInput}
                                onChange={(e) => setModalUrlInput(e.target.value)}
                                placeholder="링크 주소를 입력해주세요"
                            />
                        </label>
                        <label>
                            링크 이름 :
                            <input
                                type="text"
                                value={modalNameInput}
                                onChange={(e) => setModalNameInput(e.target.value)}
                                placeholder="링크명을 입력해주세요"
                            />
                        </label>
                    </div>

                    <div className="buttonDiv">
                        <button
                            disabled={modalUrlInput === '' || modalNameInput === ''}
                            onClick={() => {
                                const newUrlLink = [...urlLink];
                                newUrlLink.push({ linkName: modalNameInput, linkUrl: modalUrlInput });
                                setUrlLink(newUrlLink);
                                setModalUrlInput('');
                                setModalNameInput('');
                                handleCloseModal();
                            }}
                        >
                            입력
                        </button>
                        <button onClick={handleCloseModal}>닫기</button>
                    </div>
                </ModalDiv>
            )}
        </>
    );
};

export default LinkModal;
const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2% 0%;
    width: 50%;
    margin: 2% auto;
    border: 3px solid black;
    background-color: ${(props) => props.theme.color.sub};

    input {
        min-width: 250px;
        margin: 1%;
        padding: 1%;
    }
    button {
        border-radius: 15px;
        background-color: ${(props) => props.theme.color.background};
    }

    .inputDiv {
        display: flex;
        text-align: center;
        width: 100%;
        flex-direction: column;
    }
    .buttonDiv {
        display: flex;
        flex-direction: row;
    }
`;
