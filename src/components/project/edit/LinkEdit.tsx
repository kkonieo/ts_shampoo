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
    const [modalInput, setModalInput] = useState<string>('');
    const [modalInput2, setModalInput2] = useState<string>('');

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        if (isModalOpen === true) return setIsModalOpen(false);
    };

    return (
        <Div>
            <h2>관련 사이트</h2>
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
            {isModalOpen && (
                <ModalDiv>
                    <div>
                        <input
                            type="text"
                            value={modalInput}
                            onChange={(e) => setModalInput(e.target.value)}
                            placeholder="링크 주소를 입력해주세요"
                        />
                        <input
                            type="text"
                            value={modalInput2}
                            onChange={(e) => setModalInput2(e.target.value)}
                            placeholder="링크명을 입력해주세요"
                        />
                    </div>

                    <div className="buttonDiv">
                        <button
                            onClick={() => {
                                if (modalInput === '') return;
                                const newUrlLink = [...urlLink];
                                newUrlLink.push({ linkName: modalInput2, linkUrl: modalInput });
                                setUrlLink(newUrlLink);
                                setModalInput2('');
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
    font-family: 'Montserrat';
    border: none;

    button {
        margin: 2.5% 5% 5% 0;
        position: relative;
        width: 10em;
        background-color: ${(props) => props.theme.color.background};
        border-radius: 15px;
        border: none;
        font-weight: bold;
        height: 3em;
    }

    img {
        position: absolute;
        right: 0;
        top: 0;
    }
`;

const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 2%;
    width: 80%;
    input {
        width: 80%;
        border: 1px solid black;
        margin: 1%;
        padding: 1%;
    }
    button {
        border-radius: 0;
        background-color: ${(props) => props.theme.color.main};
        color: ${(props) => props.theme.color.sub};
    }
    .buttonDiv {
        display: flex;
        flex-direction: row;
    }
`;
