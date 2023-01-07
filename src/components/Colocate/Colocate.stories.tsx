import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from 'src/lib/react-query/queryClient';

import { Colocate } from './Colocate';

import type { Meta, StoryObj } from '@storybook/react';

export default { title: 'Colocate', component: Colocate } as Meta<
  typeof Colocate
>;

export const Data: StoryObj<typeof Colocate> = {
  render: () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Colocate />
      </QueryClientProvider>
    );
  },
};
