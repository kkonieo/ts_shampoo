import { MyPageProps } from 'MyPageModule';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const UserInfoBox = ({ userData, editMode }: MyPageProps.UserInfoBoxProps) => {
    const userId: string = userData?.id || "";
    const userName: string = userData?.userName || "";
    const userJobGroup: string = userData?.userJobGroup || "";
    const userGit: string = userData?.account || "없음";

    return (
        <div>
            <UserRowDiv>
                <Label>아이디</Label>
                {editMode ? <Input defaultValue={userId} /> : <p>{userId}</p>}
            </UserRowDiv>
            <UserRowDiv>
                <Label>이름</Label>
                {editMode ? <Input defaultValue={userName} /> : <p>{userName}</p>}
            </UserRowDiv>
            <UserRowDiv>
                <Label>직군</Label>
                {editMode ? 
                <Select id="userJobGroup">
                    <DataOption defaultValue={userJobGroup}>{userJobGroup}</DataOption>
                </Select> : <p>{userJobGroup}</p>}
            </UserRowDiv>
            <UserRowDiv>
                <Label>GitHub</Label>
                {editMode ? <Input defaultValue={userGit} /> : <p>{userGit}</p>}
            </UserRowDiv>
        </div>
    );
};

export default UserInfoBox;

const UserRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

const Label = styled.div`
    font-weight: bold;
    margin-right: 20px;
`;

const Input = styled.input`
    border: 1px solid black;
`;

const Select = styled.select`
    width: auto;
`;

const DataOption = styled.option``;

const AccountTitle = styled.div`
    font-weight: 500;
    font-size: 17px;
    margin-top: 30px;
`;

const AccountRowDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const AccountImageContainer = styled.div`
    flex-grow: 1;
`;

//TODO : userData.account.id에 따라서 src가 변경되도록, github ,google,kakao
const AccountImage = styled.img`
    src: ${process.env.PUBLIC_URL}+ '/img/github.svg';
`;

const AccountId = styled.div`
    flex-grow: 2;
    font-size: 16px;
    font-weight: 500;
`;
