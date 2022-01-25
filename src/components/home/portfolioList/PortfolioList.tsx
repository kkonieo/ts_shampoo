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
    return <PortfolioListView userInfo={userInfo} />;
};
