import 'tailwindcss/tailwind.css';
import { Parameters } from '@storybook/addons';
import { QueryClient, QueryClientProvider } from 'react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import type { DecoratorFn } from '@storybook/react';

// Disable `react-query` error logging
const customLogger = {
  log: console.log,
  warn: console.warn,
  error: (): void => {
    // swallow errors without printing out
  },
};

// Start Mock Service Worker
initialize({ onUnhandledRequest: 'bypass' });

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [
  mswDecorator as DecoratorFn,
  (story) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
          retry: false,
        },
      },
      logger: customLogger,
    });

    return (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    );
  },
];
