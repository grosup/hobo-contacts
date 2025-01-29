import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "@vuetify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  
  const config = {
	  plugins: [
		vue(),
		vuetify({
		  autoImport: true,
		}),
	  ],
	  resolve: {
		alias: {
		  "@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	  },
	  css: {
		preprocessorOptions: {
		  scss: { charset: false },
		  css: { charset: false },
		},
	  },
  };
  
  if(isProduction){
	  config.base = "/demo/contacts";
  }
  
  return config;
});
