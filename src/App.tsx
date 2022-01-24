import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, NavPage, PageNotFound, ProjectPage } from './pages';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/styles/global-styles';

//라우팅 및 전체 css 적용
function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="*" element={<Navigate to="404" />} />
                <Route path="/" element={<HomePage />}></Route>
                <Route path="nav/:id" element={<NavPage />}>
                    <Route path="" element={<p>aboutme</p>} />
                    <Route path="project" element={<ProjectPage />} />
                    <Route path="contact" element={<p>contact</p>} />
                    <Route path="mypage" element={<p>mypage</p>} />
                    <Route path="detail/:id" element={<p>detail</p>} />
                </Route>
                <Route path="404" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
