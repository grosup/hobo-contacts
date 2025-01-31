import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "@vuetify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  
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
  
    if(mode === "demo"){
	  config.base = "/demo/contacts";
    }
  
    if(mode === "production"){
	  config.base = "/contacts";
    }
  
    return config;
});
