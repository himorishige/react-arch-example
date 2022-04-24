import { Spinner } from './Spinner';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';


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
