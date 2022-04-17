import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import { useState } from 'react';
import LinkModal from './LinkModal';
interface Props {
    urlLink: ProjectProps.UrlLink[];
    setUrlLink: (args: ProjectProps.UrlLink[]) => void;
    editMode?: boolean;
}
const LinkEdit = ({ urlLink, setUrlLink, editMode }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <Div>
            <h2>관련 사이트</h2>
            <div>
                {urlLink &&
                    urlLink.map((link, idx) => (
                        <button
                            type="button"
                            key={`button` + idx}
                            onClick={() => window.open(`${link.linkUrl}`, '_blank')}
                        >
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
            </div>
            <LinkModal
                isModalOpen={isModalOpen}
                urlLink={urlLink}
                setUrlLink={setUrlLink}
                setIsModalOpen={setIsModalOpen}
            />
        </Div>
    );
};

export default LinkEdit;

const Div = styled.div`
    justify-content: start;
    font-family: 'Montserrat', 'EliceRegular', 'sans-serif';
    display: flex;
    flex-direction: column;
    margin: 5% 0;
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
