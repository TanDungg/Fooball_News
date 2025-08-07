import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👉 Tự động base: './' nếu đang chạy trên Windows (IIS), còn lại dùng '/'
const isWindows = process.platform === 'win32';

export default defineConfig({
  base: isWindows ? './' : '/', // ✅ Tự động, không cần cấu hình gì thêm
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: ['react-photo-view'],
  },
  server: {
    port: 2020,
  },
});
