import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { RecoilProps } from 'RecoilModule';
import styled from 'styled-components';
import { aboutMeEditState } from '../utils/data/atom';

interface Props {
    text: string;
    section: string;
    onClick?: (...args: any[]) => any;
}

const SubTitle = ({ text, section, onClick }: Props) => {
    const [controlEditMode, setControlEditMode] = useRecoilState<RecoilProps.aboutMeEditProps[]>(aboutMeEditState);

    const onEditClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const targetTitle = e.currentTarget.dataset.section;

        setControlEditMode(
            controlEditMode.map((item) =>
                item.id === targetTitle ? { ...item, editMode: !item.editMode } : { ...item, editMode: false },
            ),
        );
    };

    return (
        <SubTitleDiv>
            <TitleDiv>{text}</TitleDiv>
            <EditButtonDiv onClick={onEditClick} data-section={section}>
                <img src={`${process.env.PUBLIC_URL}/img/edit.svg`} alt="수정" />
            </EditButtonDiv>
        </SubTitleDiv>
    );
};

export default SubTitle;
const SubTitleDiv = styled.div`
    display: flex;
    margin: 10px 0px;
    padding-bottom: 5px;
    border-bottom: 1px solid #bdbdbd;
    margin-bottom: 2%;
`;

const TitleDiv = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    text-align: left;
`;

const EditButtonDiv = styled.div`
    margin-left: auto;
`;
