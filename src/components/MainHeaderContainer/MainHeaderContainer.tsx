import React, { useState } from 'react';
import styles from './MainHeaderContainer.module.scss';

interface IMainHederContainer {
    title: string,
    text: string
}

const MainHeaderContainer: React.FC<IMainHederContainer> = ({ title, text }) => {
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.text}>
                    {text}
                </p>
            </div>
            <div className={styles.bottomContainer}/>
        </div>
    )
}

export default MainHeaderContainer;
