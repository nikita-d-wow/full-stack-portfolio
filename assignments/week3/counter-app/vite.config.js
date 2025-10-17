import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // <-- 1. Import the React plugin
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // <-- 2. Include the React plugin
    tailwindcss(),
  ],
});
