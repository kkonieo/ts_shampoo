export type Color = 'blue' | 'lightBlue' | 'lightGreen' | 'lightgray' | 'gray' | 'darkgray' | 'black' | 'white';

// 색상 지정
const color: { [key in Color]: string } = {
    blue: '#385EE7',
    lightBlue: '#5993F6',
    lightGreen: '#6DDEC0',
    lightgray: '#f5f5f5',
    gray: '#E0E0E0',
    darkgray: '#757575',
    black: '#3A3A3A',
    white: '#FFFFFF',
};

export default color;
