import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = () => {
    const { pathname } = useLocation();
    const links = [
        { url: 'aboutme', text: 'About me' },
        { url: 'project', text: 'Project' },
        { url: 'contact', text: 'Contact' },
    ];
    return (
        <NavLinkUl>
            {links.map((link) => (
                <li className={pathname.includes(link.url) ? 'active' : 'inactive'}>
                    <Link to="aboutme">{link.text}</Link>
                </li>
            ))}
        </NavLinkUl>
    );
};

export default NavLink;

const NavLinkUl = styled.ul`
    margin-top: 10%;
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

    .inactive {
        :hover {
            transform: scale(1.2);
        }
    }
`;
