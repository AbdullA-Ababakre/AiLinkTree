"use client";

import { ChangeEvent, useEffect, useState } from "react";
import styles from "./index.module.css";
import InputItem from "../components/Input/index";
import { questions as questionData } from "../../data/questions";
import { Button, Input, Form } from 'antd';
import { useRouter } from 'next/navigation'


export default function Interests() {
    const router = useRouter();
    const InterestsQuestionsArr = questionData["interests"];


    const goNextPage = () => {
        router.push('beliefs');
    }

    const [form] = Form.useForm();


    const onFinish = async (values: any) => {

        const response = await fetch("/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ interestsForm: values }),
        });

        router.push('beliefs');
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
                    InterestsQuestionsArr.map((item, index) => {
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
