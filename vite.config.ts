import tailwindcss from "/node_modules/.vite/deps/@tailwindcss_vite.js?v=674cc563";
import react from "/node_modules/.vite/deps/@vitejs_plugin-react.js?v=19b4ff64";
import path from "/@id/__vite-browser-external:path";
import { defineConfig } from "/node_modules/.vite/deps/vite.js?v=7bcae5e4";
export default defineConfig(() => {
	return {
		plugins: [react(), tailwindcss()],
		resolve: { alias: { "@": path.resolve(__dirname, ".") } },
		server: {
			
			hmr: process.env.DISABLE_HMR !== "true",
			
			watch: process.env.DISABLE_HMR === "true" ? null : {}
		}
	};
});

