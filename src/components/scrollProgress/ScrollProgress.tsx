import styled from 'styled-components';

const ScrollProgress = () => {};

export default ScrollProgress;

const Div = styled.div`
    width: 100%;
    height: 4px;
    background-color: gray;
    position: fixed;
    /* 가장 상단에 고정 배치 */
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`;
