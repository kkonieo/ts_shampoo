import { Routes, Route, Navigate } from 'react-router-dom';
import { DetailPage, HomePage, NavPage, PageNotFound, ProjectPage, AboutMePage } from './pages';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/styles/global-styles';

//라우팅 및 전체 css 적용
function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="*" element={<Navigate to="PageNotFound" />} />
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/:id" element={<NavPage />}>
                    <Route path="" element={<AboutMePage />} />
                    <Route path="project" element={<ProjectPage />} />
                    <Route path="contact" element={<p>contact</p>} />
                    <Route path="mypage" element={<p>mypage</p>} />
                    <Route path="detail/:id" element={<DetailPage />} />
                </Route>
                <Route path="PageNotFound" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
