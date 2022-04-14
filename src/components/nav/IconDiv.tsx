import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { myPortpolio, userInfoData } from '../../utils/data/atom';
import { useEffect } from 'react';

interface LoggedInUser {
    id: string;
    email: string;
    name: string;
}
interface LocationState {
    currentUserData: { id: number; name: string; job: string; user_skill: string[]; img: string; slug: string };
}

const IconDiv = ({ currentUserData }: LocationState) => {
    const [isMyPortpolio, setIsMyPortpolio] = useRecoilState<boolean>(myPortpolio);

    // 로그인 유저인지 확인하기
    const userProfile: LoggedInUser | null = JSON.parse(sessionStorage.getItem('userProfile')!);

    // 현재 보고 있는 포트폴리오의 사용자가 현재 로그인한 사용자인지 판단
    useEffect(() => {
        setIsMyPortpolio(currentUserData.slug === userProfile?.id ? true : false);
    }, []);

    // const handleClick = () => {
    //     !userProfile && alert('로그인 유저만 볼 수 있는 페이지입니다');
    // };

    return (
        <Div>
            <Link to="..">
                <img src={`${process.env.PUBLIC_URL}/img/home.svg`} alt="홈으로 가기" />
            </Link>
            {userProfile && isMyPortpolio && (
                <Link to={`/${currentUserData.id}/mypage`} state={{ currentUserData }}>
                    <img src={`${process.env.PUBLIC_URL}/img/cogOutline.svg`} alt="마이 페이지" />
                </Link>
            )}
        </Div>
    );
};

export default IconDiv;

const Div = styled.div`
    display: flex;
    margin-top: 2vh;
    margin-right: 1vw;
    margin-left: auto;

    a {
        opacity: 0.8;
    }
    a:hover {
        opacity: 1;
        transform: scale(1.2);
    }
`;
