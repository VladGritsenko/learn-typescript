import React from 'react';
import styles from './Header.module.scss';

import { NavLink, Link } from "react-router-dom";
import { uuid } from 'uuidv4';

interface IHeader {
    title?: string,
    burgerMenuIsOpen: boolean,
};

interface IMenuItems {
    id: string,
    label: string,
    path: string,
}

export const menuItems: Array<IMenuItems> = [
    {
        id: uuid(), 
        label: 'Progects',
        path: '/'
    },
    {
        id: uuid(), 
        label: 'Services',
        path: '/services'
    },
    {
        id: uuid(), 
        label: 'About',
        path: '/about'
    },
    {
        id: uuid(), 
        label: 'Contact',
        path: '/contact'
    }
];
 
const Header: React.FC<IHeader> = ({ title = 'Vlad Grytsenko', burgerMenuIsOpen }) => {

    return (
        <div className={styles.header}>
            <Link to='/progects' className={burgerMenuIsOpen ? styles.titleBlack : styles.title}>
                <h1>{title}</h1>
            </Link>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <NavLink 
                            to={item.path} 
                            activeClassName={styles.activeLink} 
                            className={styles.link}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header;
