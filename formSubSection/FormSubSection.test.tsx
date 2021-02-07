import React from 'react';

import { render } from 'tests';

import { FormSubSection } from './FormSubSection';

describe('FormSubSection', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <FormSubSection title="Form Subsection" onOptionsClick={() => {}}>
        <div>content</div>
      </FormSubSection>,
    );

    expect(getByText('Form Subsection')).toBeInTheDocument();
    expect(getByText('content')).toBeInTheDocument();
  });

  test('renders correctly with initial value', () => {
    const { queryByText } = render(
      <FormSubSection title="Form Subsection" onOptionsClick={() => {}} initiallyOpened={false}>
        <div>content</div>
      </FormSubSection>,
    );

    expect(queryByText('content')).not.toBeInTheDocument();
  });
});
