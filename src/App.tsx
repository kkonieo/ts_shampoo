import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, NavPage, PageNotFound, Login, SignUp, ContactMe, Spinner } from './pages';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/styles/global-styles';
import { RecoilRoot } from 'recoil';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <RecoilRoot>
                <Routes>
                    <Route path="*" element={<Navigate to="404" />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/redirect" element={<Spinner />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="nav" element={<NavPage />}>
                        <Route path="" element={<p>aboutme</p>} />
                        <Route path="project" element={<p>project</p>} />
                        <Route path="contact" element={<ContactMe />} />
                        <Route path="mypage" element={<p>mypage</p>} />
                    </Route>
                    <Route path="404" element={<PageNotFound />} />
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;