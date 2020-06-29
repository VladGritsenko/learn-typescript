import React from 'react';
import styles from './ToolsCard.module.scss';

interface IToolsCard {
    iconLink: string,
    title: string,
    text: string,
    description: string,
};

const ToolsCard: React.FC<IToolsCard> = ({iconLink, title, text, description}) => {
    return (
        <div className={styles.toolCard}>
            <img src={iconLink} alt="toolIcon"/>
            <h4>{title}</h4>
            <h5>{text}</h5>
            <p>{description}</p>
        </div>
    );
}

export default ToolsCard;