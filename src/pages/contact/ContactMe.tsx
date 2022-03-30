import styled from 'styled-components';
import { SubTitle } from '../../components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api/auth';
import { ContactSpace } from 'ContactModule';

const ContactMe = () => {
    const location = useLocation();

    // 현재 로그인한 정보 가져오기
    const userProfile = JSON.parse(sessionStorage.getItem('userProfile') || "");

    // 현재 보고있는 포트폴리오 id 값 가져오기
    const { pathname } = location;
    const contactId: string = pathname.split("/")[1];

    // 로그인 유저와 포트폴리오 id가 일치하는지 확인
    const flag: boolean = userProfile.id === contactId;

    // 현재 보고있는 포트폴리오의 정보
    const [information, setInformation] = useState<ContactSpace.ContactInformation>();

    // 로그인 유저와 포트폴리오 id가 일치하지 않으면 API 요청
    useEffect(() => {
        if (!flag) {
            (async () => {
                const response = await api(false).getContact(contactId);
                setInformation(response);
            })()
        }
    }, [userProfile, contactId]);

    return (
        <ContainerArticle>
            <SubTitle text="📍 Contact me" section="contact-me" />
            <ContentsDiv>
                <UserDiv>
                    <UserNameP>{flag ? userProfile?.name : information?.name}</UserNameP>
                    <RowDiv>
                        <KeyDiv>
                            <p>Emaill</p>
                            <p>Github</p>
                        </KeyDiv>
                        <ValueDiv>
                            <p>{flag ? userProfile?.email : information?.email}</p>
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
`;

const ContentsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const UserDiv = styled.div`
    display: flex;
    flex-direction: column;

    width: 90%;

    margin-top: 5px;
`;

const UserNameP = styled.p`
    font-family: 'EliceBold', sans-serif;
    font-weight: bold;
    font-size: 1.3rem;

    line-height: 0;

    margin: 10px 0 20px 0;
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

    line-height: initial;

    & p {
        margin: 0;
    }
`;

const ValueDiv = styled.div`
    display: flex;
    flex-direction: column;

    font-family: 'AppleSDGothicNeo', sans-serif;

    margin-left: 20px;

    line-height: initial;

    & p {
        margin: 0;
    }
`;

const EmailDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 10fr;

    row-gap: 10px;

    width: 90%;
    height: 40vh;

    margin-top: 20px;
    padding: 30px;

    background-color: #f5f5f5;

    border-radius: 10px;

    & p {
        margin: 0;

        font-family: 'Montserrat', 'sans-serif';
        font-weight: bold;
    }

    & textarea {
        all: unset;

        height: 90%;
        padding: 10px;

        border: 1px solid #e0e0e0;
        background-color: white;

        font-family: 'AppleSDGothicNeo', 'sans-serif';
    }
`;

const InputDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    column-gap: 20px;

    & input {
        all: unset;

        height: 40px;
        width: 90%;

        padding: 0 10px;

        border-color: #e0e0e0;
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        background-color: white;

        font-family: 'AppleSDGothicNeo', 'sans-serif';

        &::placeholder {
            font-size: 0.8rem;
        }
    }

    & button {
        all: unset;

        height: 20px;

        padding: 10px;

        border-radius: 5px;
        background-color: #5993f6;

        text-align: center;
        font-family: 'Montserrat', 'sans-serif';
        font-weight: bold;
        color: white;
    }
`;
