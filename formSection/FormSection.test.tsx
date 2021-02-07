import React from 'react';

import { render } from 'tests';

import { FormSection } from './FormSection';

describe('FormSection', () => {
  test('renders', () => {
    const { getByText } = render(<FormSection title="Kitchen">{() => <p>Form content</p>}</FormSection>);
    const element = getByText('Form content');
    expect(element).toBeInTheDocument();
  });
});
