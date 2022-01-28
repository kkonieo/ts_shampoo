import { atom } from 'recoil';
import { LoginSpace } from 'LoginModule';

export const pageState = atom<LoginSpace.SignUpPageProps>({
    key: 'pageState',
    default: 0,
});