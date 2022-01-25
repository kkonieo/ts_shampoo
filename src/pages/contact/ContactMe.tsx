import styled from 'styled-components';
import { SubTitle } from '../../components';

interface Props {
    key?: string;
};

const ContactMe = () => {


    return (
        <ContainerArticle>
            <SubTitle text="📍 Contact me" />
            <ContentsDiv>
                <UserDiv>
                    <UserNameDiv>임미선</UserNameDiv>
                    <RowDiv>
                        <KeyDiv>
                            <p>Emaill</p>
                            <p>Github</p>
                        </KeyDiv>
                        <ValueDiv>
                            <p>12345678@navermcom</p>
                            <p>12345678</p>
                        </ValueDiv>
                    </RowDiv>
                </UserDiv>
                <EmailDiv />
            </ContentsDiv>
        </ContainerArticle>
    );
};

export { ContactMe };

// styled-components

const ContainerArticle = styled.article`
    display: flex;
    flex-direction: column;

    padding: 40px;
`;

const ContentsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;
`;

const UserDiv = styled.div`
    display: flex;
    flex-direction: column;

    width: 90%;
`;

const UserNameDiv = styled.div`
    font-family: 'EliceBold', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    
    line-height: 0;

    margin: 20px 0;
`;

const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const KeyDiv = styled.div`
    display: flex;
    flex-direction: column;

    font-family: 'Montserrat', sans-serif;
    font-weight: bold;

    line-height: 0;
`;

const ValueDiv = styled.div`
    display: flex;
    flex-direction: column;

    font-family: 'AppleSDGothicNeo', sans-serif;

    margin-left: 20px;

    line-height: 0;
`;

const EmailDiv = styled.div`


    width: 90%;
    height: 200px;

    background-color: yellow;
`;