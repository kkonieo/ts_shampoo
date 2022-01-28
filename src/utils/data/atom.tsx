import { atom } from 'recoil';
  
export const pageState = atom<0 | 1 | 2>({
    key: 'pageState',
    default: 0,
});