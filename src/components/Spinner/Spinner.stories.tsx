import { Spinner } from './Spinner';

import type { Meta, StoryObj } from '@storybook/react';

export default { title: 'Spinner', component: Spinner } as Meta<typeof Spinner>;

export const Default: StoryObj<typeof Spinner> = {
  args: {
    size: 'md',
    variant: 'primary',
    className: '',
  },
};
