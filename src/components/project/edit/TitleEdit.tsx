import { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

interface props {
    title: string;
    setTitle: (...args: any[]) => any;
    editMode?: boolean;
}
const TitleEdit = ({ title, setTitle }: props) => {
    const [titleEdit, setTitleEdit] = useState<boolean>(false);
    const titleRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        if (titleRef.current != null) titleRef.current.focus();
    });

    const handleChangeEdit = () => {
        setTitleEdit((current) => !current);
        if (!title) setTitle('프로젝트 제목');
    };
    return (
        <Div>
            {!titleEdit && <p onClick={handleChangeEdit}>{title}</p>}
            {titleEdit && (
                <>
                    <input
                        ref={titleRef}
                        type="text"
                        value={title}
                        placeholder="제목을 입력해주세요"
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={handleChangeEdit}
                    />
                </>
            )}
        </Div>
    );
};

export default TitleEdit;
const Div = styled.div`
    font-weight: bold;
    font-size: 2em;
`;
