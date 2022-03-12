import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { describe, it, expect } from 'vitest';

import { queryClient } from 'src/lib/react-query/queryClient';

import { Container } from './Container';

describe('<Container />', () => {
  it('should render the 5 posts as default', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Container />
      </QueryClientProvider>,
    );

    const posts = await screen.findAllByRole('listitem');
    expect(posts).toHaveLength(5);
  });
});
