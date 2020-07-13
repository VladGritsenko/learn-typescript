import React, { useState } from 'react';
import styles from './MainScreen.module.scss';
import {NavLink} from "react-router-dom";

import HeaderContainer from '../HeaderContainer/HeaderContainer';
import MainFooter from '../MainFooter/MainFooter';
import Header, { menuItems } from '../Header/Header';
import MainScreenContent from '../MainScreenContent/MainScreenContent';

const MainScreen: React.FC<any> = () => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.main}>
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
            <Header burgerMenuIsOpen={burgerMenuIsOpen}/>
            <HeaderContainer/>

            <MainScreenContent/>
            <MainFooter/>
        </div>
    );
}

export default MainScreen;
