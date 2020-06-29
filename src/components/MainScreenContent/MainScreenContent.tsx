import React from 'react';
import {Carousel} from 'primereact/carousel';

import styles from './MainScreenContent.module.scss';
import ToolsCard from './ToolsCard/ToolsCard';

interface ICarouselItems {
    breakpoint: string,
    numVisible: number,
    numScroll: number,
};

const MainScreenContent: React.FC<any> = () => {
    const carouselItems: any[] = [{name:'q'}, {name:'e'}, {name:'e'}, {name:'e'}, {name:'e'}, {name:'e'}];

    const responsiveOptions: Array<ICarouselItems> = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    return (
        <section className={styles.mainContainer}>
            <h3>Tools</h3>
            <div className={styles.breakLine}/>
            <div className={styles.toolsContainer}>
                <ToolsCard iconLink={require('../../assets/img/react_native.svg')} title='React' text='Web Development' description='desc'/>
                <ToolsCard iconLink={require('../../assets/img/react_native.svg')} title='React Native' text='Mobile Crossplatform Development' description='desc'/>
            </div>
            <div style={{display: 'flex', width: '100%'}}>
                <Carousel 
                    value={carouselItems} 
                    itemTemplate={() => <div style={{backgroundColor: 'blue', margin: 0}}>Hello</div>} 
                    responsiveOptions={responsiveOptions}
                    numVisible={3} 
                    numScroll={1}
                    orientation='horizontal'
                />
            </div>
            
        </section>
    );
}

export default MainScreenContent;