import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = () => {
    const location = useLocation();
    console.log(JSON.stringify(location));
    return (
        <NavLinkUl>
            <li
                className={
                    location.pathname.slice(-8) === '/project' || location.pathname.slice(-8) === '/contact'
                        ? ''
                        : 'active'
                }
            >
                <Link to="">About me</Link>
            </li>
            <li className={location.pathname.slice(-8) === '/project' ? 'active' : ''}>
                <Link to="project">Project</Link>
            </li>
            <li className={location.pathname.slice(-8) === '/contact' ? 'active' : ''}>
                <Link to="contact">Contact</Link>
            </li>
        </NavLinkUl>
    );
};

export default NavLink;

const NavLinkUl = styled.ul`
    padding: 0;
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
        width: 80%;
        padding: 1vh;
        text-align: center;
    }
`;
