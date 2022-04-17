import styled from 'styled-components';

const EditDetect = () => {
    return (
        <Div>
            <ContentDiv>
                <Text>수정 모드</Text>
                <Light />
            </ContentDiv>
        </Div>
    );
};

export default EditDetect;

const Div = styled.div`
    width: 100px;
    height: 50px;
    position: fixed;
    top: 0;
    right: 0;
`;

const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    background-color: beige;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px;
`;

const Text = styled.div`
    font-size: 16px;
    flex-grow: 2;
`;

const Light = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 25px;
    background-color: green;
`;
