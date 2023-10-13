"use client";

import { useState } from "react";
import styles from "./index.module.css";
import ResultWithSources from "../components/ResultWithSources";
import PromptBox from "../components/PromptBox";
import Background from "../background/page";


export default function Interests() {
    const [prompt, setPrompt] = useState("");
    const [error, setError] = useState(null);
    const [messages, setMessages] = useState([
        {
            text: "Hi there! Welcome to Abdulla AI chatbot?",
            type: "bot",
        },
    ]);
    const [firstMsg, setFirstMsg] = useState(true);

    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleSubmitPrompt = async () => {
        try {
            // Update the user message
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: prompt, type: "user", sourceDocuments: null },
            ]);

            const response = await fetch("/api/memory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input: prompt, firstMsg }),
            });

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            setPrompt("");
            // So we don't reinitialize the chain
            setFirstMsg(false);
            const searchRes = await response.json();
            // Add the bot message
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: searchRes.output.response, type: "bot", sourceDocuments: null },
            ]);
            // Clear any old error messages
            setError("");
        } catch (err) {
            console.error(err);
            setError(err);
        }
    };

    return (
        <div className={styles.wrapper}>
            <ResultWithSources messages={messages} pngFile="brain" className={styles.box} />
            <PromptBox
                prompt={prompt}
                handleSubmit={handleSubmitPrompt}
                error={error}
                handlePromptChange={handlePromptChange}
            />
        </div>
    );
}
