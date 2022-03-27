import { PortfolioListView } from './PortfolioListView';
import { HomeProps } from 'HomeModule';
import { useRecoilState } from 'recoil';
import { allSkillData } from '../../../utils/data/atom';
import { useEffect } from 'react';
import { skillApi } from '../../../utils/api/skill';

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

    //api통신으로 받아온 skill stacks
    const [skillStacks, setSkillStacks] = useRecoilState(allSkillData);

    //초기 랜더링 시 작동
    useEffect(() => {
        getSkillStacks();
    }, []);

    useEffect(() => {
        console.log(skillStacks);
    }, [skillStacks]);

    //서버에 저장되어있는 모든 스킬 스택 가져오는 메소드
    const getSkillStacks = async () => {
        try {
            await skillApi.getAllSkills().then((response: any) => {
                setSkillStacks(response.data);
                return;
            });
        } catch (e) {
            console.error(e);
        }
    };

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
