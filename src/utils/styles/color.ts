export type Color = 'blue' | 'lightBlue' | 'green' | 'gray' | 'black' | 'white';

const color: { [key in Color]: string } = {
    blue: '#385EE7',
    lightBlue: '#5993F6',
    green: '#6DDEC0',
    gray: '#E0E0E0',
    black: '3A3A3A',
    white: '#FFFFFF',
};

export default color;
