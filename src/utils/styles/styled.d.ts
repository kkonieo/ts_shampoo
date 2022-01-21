import 'styled-components';
import Color from './color';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: { [key in Color]: string };
    }
}
