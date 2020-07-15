import { Config } from '@stencil/core';
import typescript from '@rollup/plugin-typescript';
import builtins from 'rollup-plugin-node-builtins';
import nodePolyfills from 'rollup-plugin-node-polyfills';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/'
    }
  ],
  plugins: [
    typescript(),
    builtins(),
  ],
  rollupPlugins: {
    after: [
      nodePolyfills()
    ]
  },
  nodeResolve: {
    preferBuiltins: true,
    browser: true
  },
};
