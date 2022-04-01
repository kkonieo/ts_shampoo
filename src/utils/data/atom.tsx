import { atom } from 'recoil';
import { LoginSpace } from 'LoginModule';
import { RecoilProps } from 'RecoilModule';
import { HomeProps } from 'HomeModule';
import { UserSpace } from 'InformationModule';

export const pageState = atom<LoginSpace.SignUpPageProps>({
    key: 'pageState',
    default: 0,
});

export const aboutMeEditState = atom<RecoilProps.aboutMeEditProps[]>({
    key: 'aboutMeEditState',
    default: [
        { id: 'summary', editMode: false },
        { id: 'skills', editMode: false },
        { id: 'resume', editMode: false },
    ],
});

export const aboutMeData = atom<RecoilProps.aboutMeSummaryProps>({
    key: 'aboutMeSummaryState',
    default: {
        summary:
            '안녕하세요! \n프론트엔드 개발자를 꿈꾸는 엘리스입니다!\n저의 장점은 이러이러한게 있고 저러저러한게 있습니다!\n여기는 자기소개 페이지가 되어서 이런 저런 말을 씁니다!\n저는 아주 뽑고싶은 인재입니다!',
    },
});

export const idState = atom<string>({
    key: 'idState',
    default: '',
});

export const allSkillData = atom<{ id: number | null; name: string | null }[]>({
    key: 'allSkillData',
    default: [],
});

export const positionsData = atom<UserSpace.Job[]>({
    key: 'positionsData',
    default: [],
});

export const userInfoData = atom<HomeProps.UserInfoProps[]>({
    key: 'userInfoData',
    default: [],
});
