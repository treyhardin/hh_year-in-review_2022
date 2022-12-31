import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  assetsInclude: ['**/*.png'],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    // rollupOptions: {
    //   external: [
    //     "ScrollSmoother", // ignore react stuff
    //   ],
    // },
  },
    
});
