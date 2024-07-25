import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true, // 支持内联 JavaScript
          additionalData: '@import "./src/assets/style/global.scss";', // 引入多个文件以；分割
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: 8888,
      // 代理
      proxy: {
        [env.VITE_BASE_API]: {
          target: "http://localhost:7777",
          changeOrigin: true,
          disableHostCheck: true,
          rewrite: (path) =>
            env.VITE_ENV === "development"
              ? path.replace(/^\/dev-api/, "")
              : path.replace(/^\/prod-api/, ""),
        },
      },
    },
  };
});
