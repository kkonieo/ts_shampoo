import { Navigate, useLocation } from 'react-router-dom';

interface LocationState {
    currentUserData: { id: number; name: string; job: string; user_skill: string[]; img: string; slug: string };
}

const CustomNavigate = () => {
    const { state } = useLocation();

    const { currentUserData } = state as LocationState;

    return <Navigate to="aboutme" state={{ currentUserData }} />;
};

export default CustomNavigate;
