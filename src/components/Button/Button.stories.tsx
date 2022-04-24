import { Button } from './Button';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';


export default { title: 'Button', component: Button } as ComponentMeta<
  typeof Button
>;

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: ComponentStoryObj<typeof Button> = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};
