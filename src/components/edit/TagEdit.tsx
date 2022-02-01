interface Props {
    closeModal: void;
}
const LinkEdit = ({ closeModal }: Props) => {
    return (
        <div>
            <button onClick={() => closeModal} />
        </div>
    );
};

export default LinkEdit;
