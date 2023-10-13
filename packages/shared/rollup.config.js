import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';

export default {
  input: 'index.ts', // Your entry file
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm', // Output format
      sourcemap: true,
    },
  ],
  plugins: [
    external(), // Exclude peer dependencies
    nodeResolve({
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    }), // Resolve modules
    commonjs(), // Convert CommonJS to ESM
    typescript(), // Compile TypeScript
  ],
};
