// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()]
  site: 'https://zacharski.github.io',
  base: 'my-repo/zen',

});