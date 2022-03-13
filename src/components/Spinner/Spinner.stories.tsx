import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

export default { title: 'Spinner', component: Spinner } as ComponentMeta<
  typeof Spinner
>;

export const Default: ComponentStoryObj<typeof Spinner> = {
  args: {
    size: 'md',
    variant: 'primary',
    className: '',
  },
};
