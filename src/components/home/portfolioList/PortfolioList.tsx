import { PortfolioListView } from './PortfolioListView';

export const PortfolioList = (): JSX.Element => {
    interface UserInfoProps {
        name: string;
        job: string;
    }

    // 유저 포트폴리오 임의 생성을 위한 더미 데이터
    const userInfo: UserInfoProps[] = [
        {
            name: '엘리스',
            job: '프론트엔드 개발자',
        },
        {
            name: '엘리스',
            job: '백엔드 개발자',
        },
        {
            name: '엘리스',
            job: '프론트엔드 개발자',
        },
        {
            name: '엘리스',
            job: '백엔드 개발자',
        },
        {
            name: '엘리스',
            job: '프론트엔드 개발자',
        },
        {
            name: '엘리스',
            job: '백엔드 개발자',
        },
        {
            name: '엘리스',
            job: '프론트엔드 개발자',
        },
        {
            name: '엘리스',
            job: '백엔드 개발자',
        },
    ];

    const positions: string[] = [
        '프론트엔드',
        '백엔드',
        '데이터 분석가',
        '데이터 엔지니어',
        '인공지능',
        '보안 관련',
        '인프라',
        '임베디드',
        '사물인터넷',
        '게임 클라이언트',
        '웹 풀스택',
        '안드로이드 앱',
        '아이폰 앱',
    ];

    const stacks: string[] = [
        'Java',
        'JavaScript',
        'Python',
        'Djanggo',
        'React',
        'Typescript',
        'Flask',
        'git',
        'Vue',
        'HTML',
        'CSS',
        'SCSS',
        'jQuery',
        'Docker',
    ];

    return <PortfolioListView userInfo={userInfo} positions={positions} stacks={stacks} />;
};
