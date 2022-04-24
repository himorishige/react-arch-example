import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import * as stories from './Button.stories';

const { Primary } = composeStories(stories);

describe('<Button />', () => {
  it('Primary Button', async () => {
    render(<Primary />);
    expect(screen.getByText('Primary Button')).toBeInTheDocument();
  });
});
