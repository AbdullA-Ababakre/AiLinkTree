"use client";

import { useState } from "react";
import styles from "./index.module.css";
import InputItem from "../components/Input";
import { questions as questionData } from "../../data/questions";
import { Button, Form } from 'antd';
import { useRouter } from 'next/navigation'


export default function Background() {
    const router = useRouter();
    const [answers, setAnswers] = useState<
        Array<{ question: string; answer: string }>
    >([]);
    const backgroundQuestionsArr = questionData["background"];

    const goNextPage = () => {
        router.push('/interests');
    }

    const [form] = Form.useForm();

    const onFinish = async (values: any) => {

        const response = await fetch("/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ backgroundForm: values }),
        });

        router.push('/interests');
    };



    return (
        <Form
            layout="vertical"
            form={form}
            style={{ maxWidth: 'none' }}
            onFinish={onFinish}
            className={styles.formStyle}
        >
            <div className={styles.container}>
                <h1 className={styles.h1}>Personal Background</h1>
                {
                    backgroundQuestionsArr.map((item, index) => {
                        return (
                            <InputItem key={index} label={item.question} name={item.question} />
                        )
                    })
                }
                <div className={styles.btns}>
                    <Button onClick={goNextPage}>skip</Button>
                    <Button type="primary" htmlType="submit">next</Button>
                </div>
            </div>
        </Form>
    );
}
