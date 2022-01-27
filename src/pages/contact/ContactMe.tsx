import styled from 'styled-components';
import { SubTitle, RowDiv, ColumnDiv } from '../../components';

const ContactMe = () => {


    return (
        <ContainerArticle>
            <SubTitle text="📍 Contact me" />
            <ContentsDiv>
                <UserDiv>
                    <UserNameP>임미선</UserNameP>
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
                <EmailDiv>
                    <p>📮 ask me </p>
                    <InputDiv>
                        <input placeholder="이름" />
                        <input placeholder="이메일" />
                        <button>send it</button>
                    </InputDiv>
                    <textarea />
                </EmailDiv>
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

const ContentsDiv = styled(ColumnDiv)`
    justify-content: center;
    align-items: center;
`;

const UserDiv = styled(ColumnDiv)`
    width: 90%;

    margin-top: 10px;
`;

const UserNameP = styled.p`
    font-family: 'EliceBold', sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
    
    line-height: 0;

    margin: 10px 0 20px 0;
`;

const KeyDiv = styled(ColumnDiv)`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;

    line-height: initial;

    & p {
        margin: 0;
    }
`;

const ValueDiv = styled(ColumnDiv)`
    font-family: 'AppleSDGothicNeo', sans-serif;

    margin-left: 20px;

    line-height: initial;

    & p {
        margin: 0;
    }
`;

const EmailDiv = styled(ColumnDiv)`
    width: 90%;
    height: 300px;

    margin-top: 20px;
    padding: 30px;

    background-color: #F5F5F5;

    border-radius: 10px;

    & p {
        margin: 0;
        
        font-family: 'Montserrat', 'sans-serif';
        font-weight: bold;

    }

    & textarea {
        all: unset;

        height: 60%;
        padding: 10px;

        border: 1px solid #E0E0E0;
        background-color: white;
    }
`;

const InputDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    column-gap: 20px;

    margin: 10px 0;
    
    height: 40px;

    & input {
        all: unset;

        padding: 0 10px;

        width: 150px;

        border-color: #E0E0E0;
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        background-color: white;

        font-family: 'AppleSDGothicNeo', 'sans-serif';

        &::placeholder {
            font-size: 0.8rem;
        }
    }

    & input:nth-child(2) {
        width: 280px;
    }

    & button {
        all: unset;

        height: 20px;

        padding: 10px;

        border-radius: 5px;
        background-color: #5993F6;

        text-align: center;
        font-family: 'Montserrat', 'sans-serif';
        font-weight: bold;
        color: white;
    }
`;