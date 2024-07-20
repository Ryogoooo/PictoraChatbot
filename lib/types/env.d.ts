declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DIFY_API_KEY: string;
            // 他の環境変数をここに追加
        }
    }
}

export { };