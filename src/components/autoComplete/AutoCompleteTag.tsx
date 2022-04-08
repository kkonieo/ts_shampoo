import React from 'react';
import styled from 'styled-components';

interface Props {
    title: string;
    autoTagClickSkill: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const AutoCompleteTag = ({ title, autoTagClickSkill }: Props) => {
    return (
        <TagDiv onClick={autoTagClickSkill} data-title={title}>
            <TagTitleSpan>{title}</TagTitleSpan>
        </TagDiv>
    );
};

export default AutoCompleteTag;

const TagDiv = styled.div`
    text-align: center;
    background-color: ${(props) => props.theme.color.buttonBackground};
    border-radius: 8px;
    margin: 3px 0px;
    &:hover {
        background-color: ${(props) => props.theme.color.buttonHoverColor};
        cursor: pointer;
    }
`;

const TagTitleSpan = styled.span``;
