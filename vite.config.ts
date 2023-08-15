import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {  // 绝对路径的别名
      "@":path.resolve(__dirname,'./src')
    }
  }
})
