import { MyPageProps } from 'MyPageModule';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const UserInfoBox = ({ userData, jobGroup }: MyPageProps.UserInfoBoxProps) => {
    const otherJobGroup = jobGroup.filter((item) => item.id !== userData.userJobGroup.id);

    const [userId, setUserId] = useState<string>(userData.id);
    const [userName, setUserName] = useState<string>(userData.userName);
    const [userJobGroup, setUserJobGroup] = useState<string>(userData.userJobGroup.id);
    //const [userAccount, setUserAccount] = useState(userData.account);

    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.currentTarget.value);
    };

    const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value);
    };

    const onChangeUserJobGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setUserJobGroup(e.target.value);
    };

    useEffect(() => {
        console.log(userId, userName, userJobGroup);
    }, [userId, userName, userJobGroup]);

    return (
        <Div>
            <UserRowDiv>
                <Label>아이디</Label>
                <Input value={userId} onChange={onChangeId} />
            </UserRowDiv>
            <UserRowDiv>
                <Label>이름</Label>
                <Input value={userName} onChange={onChangeUserName} />
            </UserRowDiv>
            <UserRowDiv>
                <Label>직군</Label>
                <Select id="userJobGroup" onChange={onChangeUserJobGroup}>
                    <DataOption value={userJobGroup}>{userData.userJobGroup.value}</DataOption>
                    {otherJobGroup.map((item) => (
                        <DataOption value={item.id}>{item.value}</DataOption>
                    ))}
                </Select>
            </UserRowDiv>
        </Div>
    );
};

export default UserInfoBox;

const Div = styled.div``;

const UserRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 2px;
    align-items: baseline;
`;

const Label = styled.div`
    font-weight: 500;
    margin-right: 20px;
`;

const Input = styled.input``;

const Select = styled.select`
    width: auto;
`;

const DataOption = styled.option``;
