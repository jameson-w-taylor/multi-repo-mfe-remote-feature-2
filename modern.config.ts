import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js-v3';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  plugins: [appTools(), moduleFederationPlugin()],
  server: {
    port: 3002,
  },
  tools: {
    devServer: {
      headers: {
        'Access-Control-Allow-Headers': '*',
      },
    },
  },
  dev: {
    server: {
      headers: {
        'Access-Control-Allow-Headers': '*'
      }
    }
  }
});
