import React from 'react';
import styles from './HeaderContainer.module.scss';

import {Link} from 'react-router-dom';

const HeaderContainer: React.FC = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>
                        Hi. I'm Vlad
                    </h2>
                    <p className={styles.text}>
                        React and React Native developer from Kyiv, Ukraine. I create websites and application to help businesses do better online.
                    </p>
                    <Link to='#'>
                        <button 
                            className={styles.moreProjectsButton}
                        >
                            My Projects
                        </button>
                    </Link>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.photoWrapper}>
                        <img src={require('../../assets/img/mainPhoto.jpg')} alt="My Photo"/>
                    </div>
                </div>
            </div>
            <div className={styles.bottomContainer}/>
        </div>
    );
}

export default HeaderContainer;