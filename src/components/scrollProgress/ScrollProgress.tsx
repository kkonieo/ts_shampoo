import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ScrollProgress = () => {
    // 스크롤 진행도에 따른 width 상태 관리
    const [width, setWidth] = useState<number>(0);
    // 가장 부모태그에 ref를 걸어주기 위한 ref 변수
    const progressRef = useRef<HTMLDivElement | null>(null);

    //스크롤 감지 함수
    const handleScroll = useCallback((e): void => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;

        if (scrollTop === 0) {
            // 스크롤바가 가장 위에있을때는 0으로 처리
            setWidth(0);
            return;
        }

        const windowHeight: number = scrollHeight - clientHeight;
        // 스크롤바 크기 = (내용 전체의 높이) - (스크롤바를 제외한 클라이언트 높이)

        const currentPercent: number = scrollTop / windowHeight;
        // 스크롤바 크기 기준으로 scrollTop이 내려온만큼에 따라 계산 (계산시 소수점 둘째자리까지 반환)
        setWidth(currentPercent * 100);
        // 소수점 둘째자리 까지이므로, 100을 곱하여 정수로 만들어줍니다.
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, [handleScroll]);

    //진행도를 마우스로 눌러서 이동하는 메소드 (아직 미적용)
    const handleProgressMove = useCallback((e: any): void => {
        if (progressRef.current !== null) {
            const { scrollWidth } = progressRef.current;
            const { clientX } = e;

            const selectedPercent: number = (clientX / scrollWidth) * 100;
            // 선택한 x좌표(px)가 scrollWidth(px) 의 몇퍼센트인지 계산
            setWidth(selectedPercent);

            const { scrollHeight, clientHeight } = document.body;
            const windowHeight: number = scrollHeight - clientHeight;

            const moveScrollPercent: number = (windowHeight * selectedPercent) / 100;
            // 스크롤바 크기에서 선택한 좌표의 퍼센트가 몇(px)인지 계산

            window.scrollTo({
                top: moveScrollPercent,
                // 해당지점으로 스크롤 이동
                behavior: 'smooth',
            });
        }
    }, []);

    return (
        <Div ref={progressRef}>
            <ProgressDiv progressWidth={width} />
        </Div>
    );
};

export default ScrollProgress;

const Div = styled.div`
    width: 100%;
    height: 10px;
    background-color: gray;
    /* 상단 영역에 고정되도록 (fixed 사용시 브라우저 최상단으로 고정됨) */
    position: sticky;
    top: 0;
    margin-bottom: 4px;
    z-index: 10;
`;

//props도 타입 지정
const ProgressDiv = styled.div<{ progressWidth: number }>`
    height: 100%;
    width: ${(props) => props.progressWidth + '%'};
    background-color: ${(props) => props.theme.color.main};
`;
