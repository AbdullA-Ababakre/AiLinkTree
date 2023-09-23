"use client";

import { ChangeEvent, useEffect, useState } from "react";
import styles from "./index.module.css";
import InputItem from "../components/Input";
import { questions as questionData } from "../../data/questions";
import { Button, Input } from 'antd';
import { useRouter } from 'next/navigation'


export default function Interests() {
    const router = useRouter();

    const [answers, setAnswers] = useState<
        Array<{ question: string; answer: string }>
    >([]);
    const InterestsQuestionsArr = questionData["interests"];


    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const goNextPage = () => {
        router.push('/preference');
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Personal Background</h1>
            {
                InterestsQuestionsArr.map((item, index) => {
                    return (
                        <InputItem key={index} label={item.question} name={item.question} />
                    )
                })
            }
            <div className={styles.btns}>
                <Button>skip</Button>
                <Button>next</Button>
            </div>
        </div>
    );
}
