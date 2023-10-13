"use client";

import styles from "./index.module.css";
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { Toast } from 'antd-mobile';


export default function Social() {
    const router = useRouter();

    const handleSocialBtnClick = ()=>{
        Toast.show({
            content: 'working on this feat',
          })
    }

    const goToImPage = ()=>{
        router.push('chat');
    }


    return (
        <div className={styles.container}>
            <Button className={styles.btn} onClick={handleSocialBtnClick}>Get twitter data</Button>
            <Button className={styles.btn} onClick={handleSocialBtnClick}>Get Ins data</Button>
            <Button className={styles.btn} onClick={handleSocialBtnClick}>Get linkedIn data</Button>
            <Button type="primary" className={styles.resBtn} onClick={goToImPage}>Get Your AI Clone </Button>
        </div>
    );
}
