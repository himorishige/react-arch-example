import '@testing-library/jest-dom';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { describe, it, expect } from 'vitest';

import { queryClient } from 'src/lib/react-query/queryClient';

import { Colocate } from './Colocate';

describe('<Colocate />', () => {
  it('should render the 5 posts as default', async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Colocate />
      </QueryClientProvider>,
    );

    waitForElementToBeRemoved(
      () => [
        ...screen.queryAllByTestId(/loading/i),
        ...screen.queryAllByText(/loading/i),
      ],
      { timeout: 4000 },
    );

    const posts = await screen.findAllByRole('listitem');
    expect(posts).toHaveLength(5);
    expect(container.firstChild).toMatchSnapshot();
  });
});
