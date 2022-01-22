import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, HomePage, NavPage, PageNotFound } from './pages';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/styles/global-styles';
function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="*" element={<Navigate to="404" />} />
                <Route path="/" element={<Home />}></Route>
                <Route path="nav" element={<NavPage />}>
                    <Route path="project" element={<HomePage />} />
                    <Route path="aboutme" element={<PageNotFound />} />
                    <Route path="contact" element={<p>하하</p>} />
                </Route>
                <Route path="404" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
