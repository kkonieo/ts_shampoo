import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
const NavLink = () => {
    const [linkNumber, setLinkNumber] = useState(0);
    return (
        <NavLinkUl>
            <li className={linkNumber === 0 ? 'active' : ''}>
                <Link to="" onClick={() => setLinkNumber(0)}>
                    About me
                </Link>
            </li>
            <li className={linkNumber === 1 ? 'active' : ''}>
                <Link to="project" onClick={() => setLinkNumber(1)}>
                    Project
                </Link>
            </li>
            <li className={linkNumber === 2 ? 'active' : ''}>
                <Link to="contact" onClick={() => setLinkNumber(2)}>
                    Contact
                </Link>
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
