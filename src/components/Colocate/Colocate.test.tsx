import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import { renderWithQueryClient } from 'src/test/test-utils';
import { describe, it, expect } from 'vitest';

import { Colocate } from './Colocate';

describe('<Colocate />', () => {
  it('should render the 5 posts as default', async () => {
    const { container } = renderWithQueryClient(<Colocate />);

    await waitFor(
      () => {
        expect(screen.queryAllByTestId(/loading/i)).toHaveLength(0);
        expect(screen.queryAllByText(/loading/i)).toHaveLength(0);
      },
      { timeout: 5000 },
    );

    const posts = await screen.findAllByRole('listitem');
    expect(posts).toHaveLength(5);
    expect(container.firstChild).toMatchSnapshot();
  });
});
