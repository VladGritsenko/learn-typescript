import React from 'react';

import styles from './MainScreenContent.module.scss';
import ToolsCard from './ToolsCard/ToolsCard';

const MainScreenContent: React.FC<any> = () => {

    return (
        <section className={styles.mainContainer}>
            <h3>Tools</h3>
            <div className={styles.breakLine}/>
            <div className={styles.toolsContainer}>
                <ToolsCard iconLink={require('../../assets/img/react_native.svg')} title='React' text='Web Development' description='desc'/>
                <ToolsCard iconLink={require('../../assets/img/react_native.svg')} title='React Native' text='Mobile Crossplatform Development' description='desc'/>
            </div>            
        </section>
    );
}

export default MainScreenContent;