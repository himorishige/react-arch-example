import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

export default { title: 'Button', component: Button } as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};
