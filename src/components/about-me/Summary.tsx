import styled from 'styled-components';
import SubTitle from '../SubTitleEdit';

interface Props {
    contents: string[];
}

const Summary = ({ contents }: Props) => {
    return (
        <Div>
            <SubTitle text="🧑‍💻 About me" />
            <ContentsArea>
                {contents.map((item, idx) => (
                    <UserIntroduce key={idx}>{item}</UserIntroduce>
                ))}
            </ContentsArea>
        </Div>
    );
};

export default Summary;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
`;

const ContentsArea = styled.div`
    font-size: 17px;
    font-weight: 400;
    margin-top: 15px;
`;

const UserIntroduce = styled.div`
    font-size: 16px;
    margin-bottom: 3px;
`;
