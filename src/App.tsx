import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './utils/styles/global-styles';
import { lightTheme, darkTheme } from './utils/styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;