"use client";

import { ChangeEvent, useEffect, useState } from "react";
import styles from "./index.module.css";
import InputItem from "../components/Input";
import { questions as questionData } from "../../data/questions";
import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/navigation'


export default function Background() {
    const router = useRouter();

    const [answers, setAnswers] = useState<
        Array<{ question: string; answer: string }>
    >([]);
    const backgroundQuestionsArr = questionData["background"];

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const goNextPage = () => {
        router.push('/preference');
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Personal Background</h1>
            <Form
                layout="vertical"
                form={form}
                style={{ maxWidth: 'none' }}
                onFinish={onFinish}
            >
                {
                    backgroundQuestionsArr.map((item, index) => {
                        return (
                            <InputItem key={index} label={item.question} name={item.question} />
                        )
                    })
                }
                <div className={styles.btns}>
                    <Button>skip</Button>
                    <Button>next</Button>
                </div>
                {/* <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item> */}
            </Form>
        </div>
    );
}
