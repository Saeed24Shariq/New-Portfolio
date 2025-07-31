// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://saeed24shariq.github.io',
  base: 'New-Portfolio',
  adapter: node({
    mode: 'standalone'
  })
});
