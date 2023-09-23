"use client"
import Image from "next/image";
import { Button } from 'antd';
import styles from './page.module.css'
import AIGIF from '../public/AIgif.gif';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/background');
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <Image
          src={AIGIF}
          alt="AI GIF"
          className={styles.gif}
        />
        <div className={styles.title}>This is an AI chat bot aims to clone you.You can answer the questions you like</div>
        <div className={styles.warning}>FBI WARNING: DO NOT PROVIDE THE INFORMATION YOU THINK PERSONAL</div>
      </div>
      <Button onClick={handleStart}>Start</Button>
    </main>
  )
}
