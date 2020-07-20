import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
import { menuItems } from '../Header/Header';
import styles from './BurgerMenu.module.scss';

interface IBurgerMenu {
    setBurgerMenuIsOpen: any,
    burgerMenuIsOpen: boolean
};

const BurgerMenu: React.FC<IBurgerMenu> = ({ burgerMenuIsOpen, setBurgerMenuIsOpen }) => {

    return (
        <>
            <div 
                className={burgerMenuIsOpen ? "container change" : "container"} 
                onClick={() => setBurgerMenuIsOpen(prevState => {document.body.style.position = prevState ? 'relative' : 'fixed'; return !prevState})}
            >
                <div className={burgerMenuIsOpen ? "bar1 bar--black" : "bar1"}/>
                <div className={burgerMenuIsOpen ? "bar2 bar--black" : "bar2"}/>
                <div className={burgerMenuIsOpen ? "bar3 bar--black" : "bar3"}/>
            </div>
            {burgerMenuIsOpen && 
                <nav className={styles.burgerContainer}>
                    {menuItems.map(item => (
                        <NavLink 
                            to={item.path} 
                            key={item.id} 
                            activeClassName={styles.activeLink}
                            >
                                {item.label}
                            </NavLink>
                    ))}
                </nav>
            }
        </>
    )
}

export default BurgerMenu;
