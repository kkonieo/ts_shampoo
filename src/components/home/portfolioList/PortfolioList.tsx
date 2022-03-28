import { PortfolioListView } from './PortfolioListView';
import { HomeProps } from 'HomeModule';
import { jobList } from '../../../utils/api/job';
import { useRecoilState } from 'recoil';
import { allSkillData } from '../../../utils/data/atom';
import { useEffect, useState } from 'react';
import { skillApi } from '../../../utils/api/skill';
import { HomeApi } from '../../../utils/api/home';

export const PortfolioList = (): JSX.Element => {
    // 유저 포트폴리오 임의 생성을 위한 더미 데이터
    const positions: string[] = jobList.map((item) => item.name);
    const [userInfo, setUserInfo] = useState<HomeProps.UserInfoProps[]>([]);
    //api통신으로 받아온 skill stacks
    const [skillStacks, setSkillStacks] = useRecoilState(allSkillData);

    //초기 랜더링 시 Home에 필요한 데이터 요청
    useEffect(() => {
        getSkillStacks();
        getUserPortfolioList();
    }, []);

    //서버에 저장되어있는 모든 스킬 스택 가져오는 메소드
    const getSkillStacks = async () => {
        try {
            await skillApi.getAllSkills().then((response: any) => {
                setSkillStacks(response.data);
                return;
            }).then;
        } catch (e) {
            console.error(e);
        }
    };

    // UserPosrtfolioList 가져오는 메소드
    const getUserPortfolioList = async () => {
        try {
            await HomeApi.getUserPortfolioList().then((response: any) => {
                setUserInfo(response.data);
                console.log(response.data);
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <PortfolioListView userInfo={userInfo} positions={positions} stacks={skillStacks} />
        </>
    );
};
