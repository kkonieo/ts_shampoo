import { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

interface props {
    title: string;
    setTitle: (...args: any[]) => any;
    editMode?: boolean;
}
const TitleEdit = ({ title, setTitle, editMode }: props) => {
    const titleRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        if (titleRef.current != null) titleRef.current.focus();
    });

    const handleChangeEdit = () => {
        if (!title) setTitle('제목');
    };
    return (
        <Div>
            {!editMode && <p onClick={handleChangeEdit}>{title}</p>}
            {editMode && (
                <>
                    <input
                        ref={titleRef}
                        type="text"
                        value={title}
                        placeholder="제목"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <hr />
                </>
            )}
        </Div>
    );
};

export default TitleEdit;
const Div = styled.div`
    font-weight: bold;
    font-size: 2em;

    input {
        width: 100%;
    }
`;
