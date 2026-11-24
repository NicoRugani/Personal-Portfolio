import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {copyFileSync} from 'node:fs';
import {resolve} from 'node:path';


function spaFallback() {
  let outDir;
  return{
    name: 'spa-404-fallback',
    apply: 'build',
    configResolved(config){
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle(){
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
    }
  }
}

export default defineConfig({
  // The site is published at https://nicorugani.github.io/Personal-Portfolio/,
  // so built asset URLs must be prefixed with that subpath.
  base: '/Personal-Portfolio/',
  plugins: [react(), spaFallback()],
});
