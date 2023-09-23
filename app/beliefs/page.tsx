"use client";

import { useState } from "react";
import styles from "./index.module.css";
import InputItem from "../components/Input/index";
import { questions as questionData } from "../../data/questions";
import { Button, Form } from 'antd';



export default function Beliefs() {
    const BeliefsQuestionsArr = questionData["beliefs"];

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        
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
                <div style={{ color: 'red' }}>Beliefs</div>
                {
                    BeliefsQuestionsArr.map((item, index) => {
                        return (
                            <InputItem key={index} label={item.question} name={item.question} />
                        )
                    })
                }
                <Form.Item label="">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
}
