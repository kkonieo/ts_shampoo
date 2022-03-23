import { PortfolioListView } from './PortfolioListView';
import { HomeProps } from 'HomeModule';
import { jobList } from '../../../utils/api/job';

export const PortfolioList = (): JSX.Element => {
    // 유저 포트폴리오 임의 생성을 위한 더미 데이터
    const userInfo: HomeProps.UserInfoProps[] = [];
    const positions: string[] = jobList.map((item) => item.name);

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
