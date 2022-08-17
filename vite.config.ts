import { defineConfig } from "vite"
import solid_js from "vite-plugin-solid"
import uno_css from "unocss/vite"

export default defineConfig({
	plugins: [
		solid_js(),
		uno_css(),
	],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
})
