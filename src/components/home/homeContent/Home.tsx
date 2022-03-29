import { HomeView } from './HomeView';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { allSkillData, positionsData, userInfoData } from '../../../utils/data/atom';
import { useEffect } from 'react';
import { skillApi } from '../../../utils/api/skill';
import { homeApi } from '../../../utils/api/home';
import { positionsApi } from '../../../utils/api/positions';

export const Home = (): JSX.Element => {
    const setUserInfo = useSetRecoilState(userInfoData);
    const setPositions = useSetRecoilState(positionsData);
    const [skillStacks, setSkillStacks] = useRecoilState(allSkillData);

    //초기 랜더링 시 Home에 필요한 데이터 요청
    useEffect(() => {
        getSkillStacks();
        getUserPortfolioList();
        getPositions();
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
    const getUserPortfolioList = async () => {
        try {
            await homeApi.getUserPortfolioList().then((response: any) => {
                setUserInfo(response.data);
            });
        } catch (e) {
            console.error(e);
        }
    };

    const getPositions = async () => {
        try {
            await positionsApi.getPositions().then((response: any) => {
                setPositions(response.data);
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <HomeView />
        </>
    );
};
