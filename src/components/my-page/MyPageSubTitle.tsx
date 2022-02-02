import styled from 'styled-components';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MyPageProps } from 'MyPageModule';
import { useNavigate } from 'react-router-dom';

const MyPageSubTitle = ({ text }: MyPageProps.MyPageSubTitleProps) => {
    const navigate = useNavigate();

    const useConfirm = (message: string, onConfirm: () => void, onCancel: () => void) => {
        if (!onConfirm) {
            return;
        }
        if (!onCancel) {
            return;
        }

        const confirmAction = () => {
            if (window.confirm(message)) {
                onConfirm();
            } else {
                onCancel();
            }
        };
        return confirmAction;
    };

    const confirmAction = () => {
        navigate('/nav/aboutme');
    };

    const cancleAction = () => {
        console.log('취소했습니다.');
    };

    const onCancelClick = useConfirm('취소하시겠습니까?', confirmAction, cancleAction);

    return (
        <SubTitleDiv>
            <TitleDiv>{text}</TitleDiv>
            <CancelButtonDiv onClick={onCancelClick}>
                <CancelBtn icon={faTimesCircle} />
            </CancelButtonDiv>
        </SubTitleDiv>
    );
};

export default MyPageSubTitle;
const SubTitleDiv = styled.div`
    display: flex;
    margin: 10px 0px;
    padding-bottom: 5px;
    border-bottom: 1px solid #bdbdbd;
    margin-bottom: 2%;
`;

const TitleDiv = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    text-align: left;
`;

const CancelButtonDiv = styled.div`
    margin-left: auto;
`;

const CancelBtn = styled(FontAwesomeIcon)`
    color: black;
    font-size: 32px;
    border-radius: 25px;
    &:hover {
        color: aliceblue;
    }
`;
