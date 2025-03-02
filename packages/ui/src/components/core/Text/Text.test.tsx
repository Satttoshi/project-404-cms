import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  it('renders correctly', () => {
    render(<Text>Test Content</Text>);

    expect(screen.getByText('Text Component')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
