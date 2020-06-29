import React from 'react';
import styles from './MainScreen.module.scss';

import HeaderContainer from '../HeaderContainer/HeaderContainer';
import MainFooter from '../MainFooter/MainFooter';
import Header from '../Header/Header';
import MainScreenContent from '../MainScreenContent/MainScreenContent';

const MainScreen: React.FC<any> = () => {
    return (
        <div className={styles.main}>
            <Header/>
            <HeaderContainer/>
            {/* <div style={{height: 1000, width: '100%', backgroundColor: '#fff'}}></div> */}
            <MainScreenContent/>
            <MainFooter/>
        </div>
    );
}

export default MainScreen;
