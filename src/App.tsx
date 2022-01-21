import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './utils/styles/global-styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login key="" />} />
      </Routes>
    </>
  );
}

export default App;