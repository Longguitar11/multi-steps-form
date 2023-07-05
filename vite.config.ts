import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

const env = loadEnv("development", process.cwd());

const plugins = [tsconfigPaths(), react()];
if (env.VITE_ANALYZE) {
  plugins.push(visualizer() as any);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
});
