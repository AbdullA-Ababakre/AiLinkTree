"use client";

import { ChangeEvent, useEffect, useState } from "react";
import styles from "./index.module.css";
import InputItem from "../components/Input/index";
import { questions as questionData } from "../../data/questions";
import { Button, Input, Form } from 'antd';
import { useRouter } from 'next/navigation'
import {Space, Toast } from 'antd-mobile';


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
