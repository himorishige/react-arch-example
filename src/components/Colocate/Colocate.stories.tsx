import { QueryClientProvider } from 'react-query';

import { queryClient } from 'src/lib/react-query/queryClient';

import { Colocate } from './Colocate';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default { title: 'Colocate', component: Colocate } as ComponentMeta<
  typeof Colocate
>;

export const Data: ComponentStoryObj<typeof Colocate> = {
  render: () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Colocate />
      </QueryClientProvider>
    );
  },
};
