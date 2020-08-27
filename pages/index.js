import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Swatch} from '../components/Swatch/swatch';
import {colors} from '../public/colors';
import { SwatchGroup } from '../components/SwatchGroup/swatchgroup';

function GetAllKeys() {
  return Object.keys(colors);
}

function GetKeyInformation(key) {
  return colors[key];
}

export default function Home() {
  return (
    <>
      {GetAllKeys().map(x => <SwatchGroup group_name={x} group={GetKeyInformation(x)}></SwatchGroup>)}
    </>
  )
}
