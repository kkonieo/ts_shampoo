import styled from 'styled-components';
interface Props {
    closeModal: void;
}
const LinkEdit = ({ closeModal }: Props) => {
    return (
        <Div>
            <button onClick={() => closeModal} />
        </Div>
    );
};

export default LinkEdit;

const Div = styled.div`
    width: 500px;
    height: 500px;
    position: absolute;
`;
