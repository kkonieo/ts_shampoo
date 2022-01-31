import { Routes, Route, Navigate } from 'react-router-dom';
import {
    HomePage,
    NavPage,
    PageNotFound,
    ProjectPage,
    ProjectAddPage,
    ProjectDetailPage,
    AboutMePage,
    Login,
    SignUp,
    ContactMe,
    Spinner,
} from './pages';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/styles/global-styles';
import { RecoilRoot } from 'recoil';

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
                    <Route path="/redirect" element={<Spinner />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="intro" element={<p>만든 사람들</p>}></Route>
                    <Route path=":id" element={<NavPage />}>
                        <Route path="" element={<Navigate to="aboutme" />} />
                        <Route path="aboutme" element={<AboutMePage />} />
                        <Route path="project" element={<ProjectPage />} />
                        <Route path="project/:id" element={<ProjectDetailPage />} />
                        <Route path="project/add" element={<ProjectAddPage />} />
                        <Route path="contact" element={<ContactMe />} />
                        <Route path="mypage" element={<p>mypage</p>} />
                        <Route path="detail" element={<p>settings</p>} />
                    </Route>
                    <Route path="404" element={<PageNotFound />} />
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;
