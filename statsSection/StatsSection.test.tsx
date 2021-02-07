import React from 'react';

import { render } from 'tests';

import { StatsSection } from './StatsSection';

describe('StatsSection', () => {
  test('renders', () => {
    const { getByText } = render(<StatsSection>Test</StatsSection>);

    const element = getByText('Test');

    expect(element).toBeInTheDocument();
  });
});
