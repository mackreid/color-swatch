import React, {useStates} from 'react';
import styles from './swatch.module.css';

export function Swatch(props) {
    const swatchStyle = {
        background: props.swatch_color
    };
    return (
        <div className={styles.swatch}>
            <p>{props.swatch_label}</p>
            <div style={swatchStyle}></div>
            <p>{props.swatch_color}</p>
        </div>
    )
}