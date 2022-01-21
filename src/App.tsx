import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, NavPage, PageNotFound } from './pages';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/styles/global-styles';
function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="*" element={<Navigate to="404" />} />
                <Route path="/" element={<HomePage />}></Route>
                <Route path="nav" element={<NavPage />}>
                    <Route path="project" element={<HomePage />} />
                </Route>
                <Route path="404" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
