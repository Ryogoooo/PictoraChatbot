// pages/index.tsx
'use client'
import { useState } from 'react'
import Head from 'next/head'
import styles from './styles.module.css'
import { runDifyWorkflow } from '@/lib/services/sendToDifyChatbot'

type MessageType = '指示' | 'メモ' | '指示への回答'

interface Message {
    type: MessageType
    content: string
}

export default function Home() {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return

        //APIを呼び出す
        runDifyWorkflow(input)


        const newMessage: Message = {
            type: input.startsWith('指示:') ? '指示' :
                input.startsWith('メモ:') ? 'メモ' : '指示への回答',
            content: input.replace(/^(指示:|メモ:)/, '').trim()
        }

        setMessages([...messages, newMessage])
        setInput('')
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.chatContainer}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`${styles.message} ${msg.type === '指示' ? styles.right : styles.left}`}>
                            <div className={`${styles.messageContent} ${msg.type === '指示' ? styles.instruction :
                                msg.type === 'メモ' ? styles.memo : styles.response
                                }`}>
                                <strong>{msg.type}:</strong> {msg.content}
                            </div>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className={styles.inputForm}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="メッセージを入力（'指示:' や 'メモ:' で始めると分類されます）"
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>送信</button>
                </form>
            </main>
        </div>
    )
}