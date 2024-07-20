import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
const apiKey = process.env.DIFY_API_KEY;

//デバッグ
console.log(apiKey); // 'your_api_key_here'

// Dify API の設定
const DIFY_BASE_URL: string = 'https://api.dify.ai/v1';
const DIFY_API_KEY = apiKey;
const user_id: string = 'user1';

// ワークフローを実行する関数
export async function runDifyWorkflow(inputs: string) {
    try {
        const response = await axios.post(
            `${DIFY_BASE_URL}`,
            {
                inputs: { "input": inputs },
                response_mode: 'streaming', // または 'streaming'
                user: user_id // オプション: ユーザー識別子
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${DIFY_API_KEY}`
                }
            }
        );

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Dify API Error:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}
