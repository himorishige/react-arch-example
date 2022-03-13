import '@testing-library/jest-dom';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { renderWithQueryClient } from 'src/test/test-utils';
import { describe, it, expect } from 'vitest';

import { Colocate } from './Colocate';

describe('<Colocate />', () => {
  it('should render the 5 posts as default', async () => {
    const { container } = renderWithQueryClient(<Colocate />);

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
