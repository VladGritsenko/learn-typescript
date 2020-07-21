import React, { useState, useEffect } from 'react';
import styles from './MyProjects.module.scss';
import { uuid } from 'uuidv4';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import MainHeaderContainer from '../MainHeaderContainer/MainHeaderContainer';

interface IToolsArray {
    name: string,
    checked: boolean,
    id: string
};

const toolsArray: Array<IToolsArray> = [
    {name: 'JavaScript', checked: false, id: uuid()},
    {name: 'HTML5', checked: false, id: uuid()},
    {name: 'CSS3', checked: false, id: uuid()},
    {name: 'SCSS', checked: false, id: uuid()},
    {name: 'React', checked: false, id: uuid()},
    {name: 'Redux', checked: false, id: uuid()},
    {name: 'TypeScript', checked: false, id: uuid()},
    {name: 'Figma', checked: false, id: uuid()},
    {name: 'Firebase', checked: false, id: uuid()},
    {name: 'Zeplin', checked: false, id: uuid()},
    {name: 'GraphQL', checked: false, id: uuid()},
    {name: 'React Native', checked: false, id: uuid()},
    {name: 'Firebase', checked: false, id: uuid()},
    {name: 'Expo', checked: false, id: uuid()},
    {name: 'MongoDB', checked: false, id: uuid()},
    {name: 'React Native', checked: false, id: uuid()}
]; 

const MyProjects: React.FC = () => {
    const [ burgerMenuIsOpen, setBurgerMenuIsOpen ] = useState<boolean>(false);
    const [ tools, setTools ] = useState<IToolsArray[]>([]);
    console.log('tools',)
    useEffect(() => {
        setTools(toolsArray)
    }, []);

    const toogleCheckbox = (id: string, checked: boolean) => {
        setTools(prev => prev.map(tool => {
            if(tool.id === id) {
                return {
                    name: tool.name,
                    id: tool.id,
                    checked: checked
                }
            }

            return tool;
        }))
    }
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
            <div className={styles.labelContainer}>
                <h3>Projects</h3>
                <div className={styles.breakLine}/>
            </div>
            <section className={styles.toolsContainer}>
                {tools.map(tool => (
                    <div key={tool.id} className={styles.checkboxContainer}>
                        <input 
                            type='checkbox'
                            onChange={({ target }) => toogleCheckbox(target.id, target.checked)} 
                            checked={tool.checked}
                            id={tool.id}
                        />
                        <label htmlFor={tool.id} className="p-checkbox-label">{tool.name}</label>
                    </div>
                ))}
            </section>
        </div>
    )
};

export default MyProjects;