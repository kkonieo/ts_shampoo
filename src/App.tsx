import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

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

// styled-components

// 이 부분은 일단 예비용
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: white;
    text-decoration: none;
  }
  html {
    font-size: 18px;
    background-color: #F5F5F5;
  }
  body {   
    text-align: center;
  }
  h1 {
    font-weight: bold;
    font-size: 2rem;
  }
`;