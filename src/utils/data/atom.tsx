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

export const aboutMeSummaryData = atom<RecoilProps.aboutMeSummaryProps>({
    key: 'aboutMeSummaryState',
    default: {
        summary: '',
    },
});

export const aboutMeSkillData = atom<RecoilProps.aboutMeSkillProps>({
    key: 'aboutMeSkillState',
    default: {
        skills: [],
    },
});

export const aboutMeResumeData = atom<RecoilProps.aboutMeResumeProps>({
    key: 'aboutMeState',
    default: {
        resume: [],
    },
});

export const idState = atom<string>({
    key: 'idState',
    default: '',
});

export const allSkillData = atom<{ id: number; name: string }[]>({
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

export const myPortpolio = atom<boolean>({
    key: 'myPortpolio',
    default: false,
});
