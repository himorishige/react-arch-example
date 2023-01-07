import { Avatar } from './Avatar';

import type { Meta, StoryObj } from '@storybook/react';

export default { title: 'Avatar', component: Avatar } as Meta<typeof Avatar>;

export const Image: StoryObj<typeof Avatar> = {
  args: {
    size: 'large',
    src: 'https://avatars.dicebear.com/v2/male/e828b4072fdb3dc6312b67977f0b247a.svg',
  },
};

export const NoImage: StoryObj<typeof Avatar> = {
  args: {},
};
