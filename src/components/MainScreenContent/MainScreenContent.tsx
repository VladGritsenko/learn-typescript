import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from './MainScreenContent.module.scss';
import ToolsCard from './ToolsCard/ToolsCard';


const MainScreenContent: React.FC<any> = () => {
   const sliderData: string[] = [
    require('../../assets/img/html5.svg'),
    require('../../assets/img/javascript.svg'),
    require('../../assets/img/sass.svg'),
    require('../../assets/img/typescript.svg'),
    require('../../assets/img/reactSlider.svg'),
    require('../../assets/img/redux.svg'),
    require('../../assets/img/css.svg'),
    require('../../assets/img/github.svg'),
    require('../../assets/img/mongodb.svg'),
    require('../../assets/img/npm.svg'),
    require('../../assets/img/firebase.svg'),
    require('../../assets/img/bootstrap.svg'),
    require('../../assets/img/figma.svg'),
    require('../../assets/img/zeplin.svg'),
    require('../../assets/img/graphql.svg'),
   ]

    return (
        <section className={styles.mainContainer}>
            <h3>Tools</h3>
            <div className={styles.breakLine}/>
            <div className={styles.toolsContainer}>
                <ToolsCard 
                    iconLink={require('../../assets/img/react_native.svg')} 
                    title='React' 
                    text='Web Development' 
                    description='React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.'
                />
                <ToolsCard 
                    iconLink={require('../../assets/img/react_native.svg')} 
                    title='React Native' 
                    text='Mobile Crossplatform Development' 
                    description='React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities. The working principles of React Native are virtually identical to React except that React Native does not manipulate the DOM via the Virtual DOM. It runs in a background process directly on the end-device and communicates with the native platform via a serialisation, asynchronous and batched Bridge.'
                />
            </div>
            <div style={{position: 'relative', margin: '80px 50px 0'}}>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={sliderData.length}
                    visibleSlides={6}
                >
                    <Slider>
                        {
                            sliderData.map((item, index) => (
                                <Slide index={index} key={index}>
                                    <div className={styles.sliderItem}>
                                        <img src={item} alt="tool"/>
                                    </div>
                                </Slide>
                            ))
                        }
                    </Slider>
                    <ButtonBack className={styles.buttonBack}>
                        <img src={require('../../assets/img/back.svg')} alt=""/>
                    </ButtonBack> 
                    <ButtonNext className={styles.buttonNext}>
                        <img src={require('../../assets/img/next.svg')} alt=""/>
                    </ButtonNext>
                </CarouselProvider>
            </div>
        </section>
    );
}

export default MainScreenContent;