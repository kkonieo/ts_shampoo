import { MyPageProps } from 'MyPageModule';
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
    align-items: center;
    margin-bottom: 20px;
    p, input {
        padding: 7px;
    }
`;

const Label = styled.div`
    width: 15%;
    font-weight: bold;
    margin-right: 20px;
`;

const Input = styled.input`
    width: 50%;
    border: 1px solid lightgray;
    border-radius: 5px;
`;

const Select = styled.select`
    width: auto;
`;

const DataOption = styled.option``;