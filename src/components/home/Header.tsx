import { useState } from 'react';
import { HeaderView } from './HeaderView';

export const Header = (): JSX.Element => {
    const [name, setName] = useState<string>('엘리스');

    return <HeaderView name={name} />;
};
