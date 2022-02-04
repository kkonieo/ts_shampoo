import { atom } from 'recoil';

export const pageState = atom<number>({
    key: 'pageState',
    default: 0,
});

export const idState = atom<string>({
    key: 'idState',
    default: '',
});
