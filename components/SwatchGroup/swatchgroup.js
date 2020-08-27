import styles from './swatchgroup.module.css';
import { Swatch } from '../Swatch/swatch';

function GetAllKeysInGroup(group) {
    const s = Object.keys(group);
    return s;
}

export function SwatchGroup(props) {
    const allKeysForGroup = GetAllKeysInGroup(props.group);
    return (
        <div className={styles.swatchGroup}>
            <p className={styles.swatchGroupName}>{props.group_name}</p>
            {allKeysForGroup.map( x =>
                <div>
                    <p className={styles.swatchSubGroup}>{x}</p>
                    {
                        GetAllKeysInGroup(props.group[x]).map(
                            t => 
                                <Swatch swatch_label={t} swatch_color={props.group[x][t]}></Swatch>
                        )
                    }
                </div>
            )}          
        </div>
    )
}