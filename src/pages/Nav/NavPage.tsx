import styled from 'styled-components';
const Div = styled.div`
    background-color: #f5f5f5;
    display: flex;
`;
const NavContainer = styled.div`
    margin: auto;
    height: auto;
    width: auto;
    display: flex;
    border-radius: 5%;
    border: 1px solid black;
`;

const NavDiv = styled.div`
    width: 30%;
    background: white;
`;

const ContentDiv = styled.div``;
const NavPage = () => {
    return (
        <Div>
            <NavContainer>
                <NavDiv></NavDiv>
                <ContentDiv></ContentDiv>
            </NavContainer>
        </Div>
    );
};

export default NavPage;
