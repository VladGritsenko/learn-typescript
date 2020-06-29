import React from 'react';
import styles from './Header.module.scss';

import {NavLink, Link} from "react-router-dom";
import { uuid } from 'uuidv4';

interface IHeader {
    title?: string
};

interface IMenuItems {
    id: string,
    label: string,
    path: string,
}
 
const Header: React.FC<IHeader> = ({title = 'Vlad Grytsenko'}) => {

    const menuItems: Array<IMenuItems> = [
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

    return (
        <div className={styles.header}>
            <Link to='/progects'>
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
