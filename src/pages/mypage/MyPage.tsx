import styled from 'styled-components';
import { SubTitle } from '../../components';
import { MyPageSubTitle } from '../../components/my-page';

const MyPage = () => {
    return (
        <Div>
            <MyPageSubTitle text="🛠 Setting" />
        </Div>
    );
};

export default MyPage;

const Div = styled.div`
    padding: 20px;
    box-sizing: border-box;
`;
