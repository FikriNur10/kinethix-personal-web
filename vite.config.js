import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3211,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
