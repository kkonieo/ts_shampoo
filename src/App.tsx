import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import {
    HomePage,
    NavPage,
    PageNotFound,
    ProjectPage,
    ProjectDetailPage,
    AboutMePage,
    Login,
    SignUp,
    ContactMe,
    Intro,
} from './pages';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/styles/global-styles';
import { RecoilRoot } from 'recoil';
import MyPage from './pages/mypage/MyPage';
import { CustomNavigate } from './components/nav';
//라우팅 및 전체 css 적용

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <RecoilRoot>
                <Routes>
                    {/* <Route path="*" element={<Navigate to="404" />} /> */}
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/intro" element={<Intro />}></Route>
                    <Route path=":id" element={<NavPage />}>
                        <Route index element={<CustomNavigate />} />
                        <Route path="aboutme" element={<AboutMePage />} />
                        <Route path="project" element={<ProjectPage />} />
                        <Route path="project/:id" element={<ProjectDetailPage />} />
                        <Route path="project/add" element={<ProjectDetailPage />} />
                        <Route path="contact" element={<ContactMe />} />
                        <Route path="mypage" element={<MyPage />} />
                        <Route path="detail" element={<p>settings</p>} />
                    </Route>
                    <Route path="404" element={<PageNotFound />} />
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;
