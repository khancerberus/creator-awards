// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

import auth from 'auth-astro';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), auth(), react()]
});