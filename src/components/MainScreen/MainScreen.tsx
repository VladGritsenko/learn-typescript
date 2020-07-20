import React, { useState } from 'react';
import styles from './MainScreen.module.scss';

import HeaderContainer from '../HeaderContainer/HeaderContainer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import MainFooter from '../MainFooter/MainFooter';
import Header from '../Header/Header';
import MainScreenContent from '../MainScreenContent/MainScreenContent';

const MainScreen: React.FC<any> = () => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.main}>
            <BurgerMenu 
                burgerMenuIsOpen={burgerMenuIsOpen} 
                setBurgerMenuIsOpen={setBurgerMenuIsOpen}
            />
            <Header burgerMenuIsOpen={burgerMenuIsOpen}/>
            <HeaderContainer/>
            <MainScreenContent/>
            <MainFooter/>
        </div>
    );
}

export default MainScreen;
