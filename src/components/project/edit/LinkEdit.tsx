import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import { useState } from 'react';

interface Props {
    urlLink: ProjectProps.IUrl[];
    setUrlLink: (args: ProjectProps.IUrl[]) => void;
    editMode?: boolean;
}
const LinkEdit = ({ urlLink, setUrlLink, editMode }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalUrlInput, setModalUrlInput] = useState<string>('');
    const [modalNameInput, setModalNameInput] = useState<string>('');

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        if (isModalOpen === true) return setIsModalOpen(false);
    };

    return (
        <Div>
            <h2>관련 사이트</h2>
            <ButtonDiv>
                {urlLink &&
                    urlLink.map((link, idx) => (
                        <button type="button" onClick={() => window.open(`${link.linkUrl}`, '_blank')}>
                            {link.linkName}
                            {editMode && (
                                <img
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        const newUrlLink = [];
                                        for (let i: number = 0; i < urlLink.length; i++) {
                                            if (i !== idx) {
                                                newUrlLink.push(urlLink[i]);
                                            }
                                        }
                                        setUrlLink(newUrlLink);
                                    }}
                                    src={`${process.env.PUBLIC_URL}/img/close.svg`}
                                    alt="닫기"
                                />
                            )}
                        </button>
                    ))}
                {editMode && (
                    <button type="button" onClick={handleOpenModal}>
                        +
                    </button>
                )}
            </ButtonDiv>
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
                            onClick={() => {
                                if (modalUrlInput === '') return;
                                const newUrlLink = [...urlLink];
                                newUrlLink.push({ linkName: modalNameInput, linkUrl: modalUrlInput });
                                setUrlLink(newUrlLink);
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
        </Div>
    );
};

export default LinkEdit;

const Div = styled.div`
    justify-content: start;
    font-family: 'Montserrat', 'EliceRegular', 'sans-serif';
    display: flex;
    flex-direction: column;
    img {
        position: absolute;
        right: 0;
        top: 0;
    }

    button {
        border: 0px solid black;
        margin-right: 3%;
        position: relative;
        width: 10em;
        height: 3em;
        background-color: ${(props) => props.theme.color.background};
        font-weight: bold;
        border-radius: 15px;
    }
`;
const ButtonDiv = styled.div``;
const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2%;
    width: 80%;
    margin: auto;
    input {
        min-width: 250px;
        margin: 1%;
        padding: 1%;
    }
    button {
        border-radius: 0;
        background-color: ${(props) => props.theme.color.main};
        color: ${(props) => props.theme.color.sub};
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
