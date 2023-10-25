// import React, { useEffect } from 'react';
// import { devDependencies } from '../../../package.json';
import styles from './index.module.scss';
import logoSrc from '@assets/imgs/vite.png';
// import { ReactComponent as ReactLogo } from '@assets/icons/logo.svg';

const baseUrl = import.meta.env.VITE_IMG_BASE_URL as string;
const xiaoxiaoRelativePath = 'src/assets/xiaoxiao.jpg'; // 根据你的项目结构调整这个路径
const xiaoxiaoFullUrl = new URL(xiaoxiaoRelativePath, baseUrl).href;

export function Header() {
    return (
    <>
    <div className={`p-20px text-center ${styles.header}`}>
        <img className="m-auto mb-4" src={logoSrc} alt="" />
    </div>
    <img src={xiaoxiaoFullUrl} alt="" />
    </>
    );
}