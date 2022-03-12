import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from 'src/lib/react-query/queryClient';

import { Colocate } from './Colocate';

export default { title: 'Colocate', component: Colocate } as ComponentMeta<
  typeof Colocate
>;

export const Data: ComponentStory<typeof Colocate> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Colocate />
    </QueryClientProvider>
  );
};
