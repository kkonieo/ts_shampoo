import styled from 'styled-components';

interface IProps {
    src: string;
}
const UserPicture = ({ src }: IProps) => {
    return (
        <Div>
            <img src={`${process.env.PUBLIC_URL}${src}`} alt="사용자 이미지" />
        </Div>
    );
};

export default UserPicture;

const Div = styled.div`
    margin: 10% auto 10% auto;
    background-color: ${(props) => props.theme.color.background};
    border-radius: 50%;

    width: 150px;
    min-width: 100px;
    height: 150px;
    min-height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 10px solid ${(props) => props.theme.color.sub};
    img {
        padding: 7%;
        width: 80%;
    }
`;
