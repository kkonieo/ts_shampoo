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
                <Route path="/login" element={<p>로그인</p>}></Route>
                <Route path="/signup" element={<p>회원가입</p>}></Route>
                <Route path="/intro" element={<p>만든 사람들</p>}></Route>
                <Route path="/:id" element={<NavPage />}>
                    <Route path="aboutme" element={<AboutMePage />} />
                    <Route path="project" element={<ProjectPage />} />
                    <Route path="contact" element={<p>contact</p>} />
                    <Route path="mypage" element={<p>mypage</p>} />
                    <Route path="project/:id" element={<DetailPage />} />
                    <Route path="detail" element={<DetailPage />} />
                </Route>
                <Route path="404" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
