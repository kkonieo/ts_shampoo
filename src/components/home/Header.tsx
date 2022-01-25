import { useState } from 'react';
import { HeaderView } from './HeaderView';

export const Header = (): JSX.Element => {
    const [login, setLogin] = useState<boolean>(false);

    return <HeaderView login={login} />;
};
