import path from 'path';
import react from '@vitejs/plugin-react';
import env from 'vite-plugin-env-compatible';
import tsconfigPaths from 'vite-tsconfig-paths';
const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y', {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  async viteFinal(config) {
    const plugins = config.plugins.filter(plugin => {
      return !(Array.isArray(plugin) && plugin[0]?.name.startsWith('vite:react'));
    });
    return {
      ...config,
      plugins: [...plugins, react(), tsconfigPaths(), env({
        prefix: 'REACT_APP_'
      })],
      resolve: {
        alias: [{
          find: 'src',
          replacement: path.resolve(__dirname, '../src')
        }]
      }
    };
  },
  docs: {
    autodocs: true
  }
};
export default config;