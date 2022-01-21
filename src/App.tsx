import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, NavPage, PageNotFound } from './pages';

function App() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="404" />} />
            <Route path="/" element={<HomePage />}></Route>
            <Route path="nav" element={<NavPage />}>
                <Route path="project" element={<HomePage />} />
            </Route>
            <Route path="404" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;
