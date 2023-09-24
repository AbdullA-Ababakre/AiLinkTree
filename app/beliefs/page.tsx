"use client";

import { useState } from "react";
import styles from "./index.module.css";
import InputItem from "../components/Input/index";
import { questions as questionData } from "../../data/questions";
import { Button, Form } from 'antd';
import { useRouter } from 'next/navigation'



export default function Beliefs() {
    const router = useRouter();
    const BeliefsQuestionsArr = questionData["beliefs"];

    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        const response = await fetch("/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ beliefsForm: values }),
        });

        router.push('social');
    };

    const goNextPage = () => {
        router.push('social');
    }


    return (
        <Form
            layout="vertical"
            form={form}
            style={{ maxWidth: 'none' }}
            onFinish={onFinish}
            className={styles.formStyle}
        >
            <div className={styles.container}>
                <div style={{ color: 'red' }}>Beliefs</div>
                {
                    BeliefsQuestionsArr.map((item, index) => {
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
