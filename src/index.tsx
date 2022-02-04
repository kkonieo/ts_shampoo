import ReactDOM from 'react-dom';
import App from './App';
import { navTheme } from './utils/styles/theme';
import { ThemeProvider } from 'styled-components';
ReactDOM.render(
    <ThemeProvider theme={navTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
