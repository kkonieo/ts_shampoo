import { atom } from 'recoil';

export const pageState = atom<number>({
    key: 'signUpPage',
    default: 0,
});