import path from 'path';
import react from '@vitejs/plugin-react';
import env from 'vite-plugin-env-compatible';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    const plugins = config.plugins.filter((plugin) => {
      return !(
        Array.isArray(plugin) && plugin[0]?.name.startsWith('vite:react')
      );
    });

    return {
      ...config,
      plugins: [
        ...plugins,
        react(),
        svgrPlugin(),
        tsconfigPaths(),
        env({ prefix: 'REACT_APP_' }),
      ],
      resolve: {
        alias: [
          {
            find: 'src',
            replacement: path.resolve(__dirname, '../src'),
          },
        ],
      },
    };
  },
};

export default config;
