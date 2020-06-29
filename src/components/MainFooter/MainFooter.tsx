import React from 'react';
import styles from './MainFooter.module.scss';


const MainFooter: React.FC = () => {
    
    return (
        <section className={styles.mainContainer}>
            <div className={styles.topContainer}/>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                            <h2 className={styles.title}>
                                Let's Work Together
                            </h2>
                            <p className={styles.text}>
                                Have a project you'd like to discuss?
                            </p>
                </div>
                <div className={styles.contactInfoContainer}>
                    <div>
                        <img src={require('../../assets/img/mail.svg')} alt="Mail"/>
                        <a href='mailto:vladik.grytsenko2017@gmail.com'>
                            <p>ON EMAIL</p>
                        </a>
                    </div>
                    <div>
                        <img src={require('../../assets/img/linkedin.svg')} alt="Linkedin"/>
                        <a 
                            href='https://linkedin.com/in/vlad-grytsenko-915606194'
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            <p>ON LINKEDIN</p>
                        </a>
                    </div>
                    <div>
                        <img src={require('../../assets/img/facebook.svg')} alt="Facebook"/>
                        <a 
                            href='https://www.facebook.com/profile.php?id=100007943414117'
                            target='_blank' 
                            rel="noopener noreferrer"
                            >
                            <p>ON FACEBOOK</p>
                        </a>
                    </div>
                    <div>
                        <img src={require('../../assets/img/instagram.svg')} alt="Instagram"/>
                        <a 
                            href='https://www.instagram.com/grytssenko/?igshid=lnvc7vulydn1' 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            <p>ON INSTAGRAM</p>
                        </a>
                    </div>
                </div>
            </div>
            <header className={styles.copyringContainer}>
                <p>© 2020 Vlad Grytsenko. All rights reserved.</p>
            </header>
        </section>
    );
}

export default MainFooter;