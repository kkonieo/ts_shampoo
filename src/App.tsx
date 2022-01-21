import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login key="" />} />
    </Routes>
  );
}

export default App;