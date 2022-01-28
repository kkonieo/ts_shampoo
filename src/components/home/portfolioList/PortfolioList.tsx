import { PortfolioListView } from './PortfolioListView';
import { HomeProps } from 'HomeModule';

export const PortfolioList = (): JSX.Element => {
    // 유저 포트폴리오 임의 생성을 위한 더미 데이터
    const userInfo: HomeProps.UserInfoProps[] = [];
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

    for (let i = 0; i < 60; i++) {
        let count1 = i % positions.length;
        let position: string = positions[count1];
        let count2 = i % stacks.length;
        let stack: string = stacks[count2];
        userInfo.push({
            name: '엘리스' + `${i}`,
            position: position,
            stack: stack,
        });
    }

    return (
        <>
            <PortfolioListView userInfo={userInfo} positions={positions} stacks={stacks} />
        </>
    );
};
