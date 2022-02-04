import { atom } from 'recoil';
import { LoginSpace } from 'LoginModule';
import { RecoilProps } from 'RecoilModule';

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

export const idState = atom<string>({
    key: 'idState',
    default: '',
});
