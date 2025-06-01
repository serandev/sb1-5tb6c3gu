import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // `.env`, `.env.production` 등 읽기
  const env = loadEnv(mode, process.cwd());

  const isDev = mode === 'development';

  return {
    // ✅ StackBlitz(dev)에서는 '/', GitHub Pages(prod)에서는 설정된 base 사용
    base: isDev ? '/' : env.VITE_PUBLIC_BASE || '/',
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
