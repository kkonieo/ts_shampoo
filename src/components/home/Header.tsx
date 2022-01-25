import { useState } from 'react';
import { HeaderView } from './HeaderView';

export const Header = (): JSX.Element => {
    const [login, setLogin] = useState<boolean>(false);
    const [name, setName] = useState<string>('엘리스');

    return <HeaderView login={login} name={name} />;
};
