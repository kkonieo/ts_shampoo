import { useEffect, useState } from 'react';
import { HeaderView } from './HeaderView';

export const Header = (): JSX.Element => {
    const [name, setName] = useState<string | undefined>();
    const value = sessionStorage.getItem('userProfile');

    useEffect(() => {
        if (typeof value === 'string') {
            setName(JSON.parse(value).name);
        } else {
            setName(undefined);
        }
    }, []);

    return <HeaderView name={name} />;
};
