import React, { useState } from 'react';
import styles from './MyProjects.module.scss';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import MainHeaderContainer from '../MainHeaderContainer/MainHeaderContainer';

const MyProjects: React.FC = () => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.main}>
            <BurgerMenu 
                burgerMenuIsOpen={burgerMenuIsOpen} 
                setBurgerMenuIsOpen={setBurgerMenuIsOpen}
            />
            <Header burgerMenuIsOpen={burgerMenuIsOpen}/>
            <MainHeaderContainer 
                title='My Projects' 
                text='For the over 10 years I’ve been designing and developing websites. Below are some of my favourites.'
                />
        </div>
    )
};

export default MyProjects;