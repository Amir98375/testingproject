// src/components/FooterComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FooterComponent from './Footer';


describe('FooterComponent', () => {
  const footNotes = [
    {
      id: 'description_1',
      description: '<p>This is the first footnote <a href="https://example.com">Link 1</a></p>',
    },
    {
      id: 'description_2',
      description: '<p>This is the second footnote <a href="https://example2.com">Link 2</a></p>',
    },
  ];

  it('renders the footnotes correctly', () => {
    render(<FooterComponent footNotes={footNotes} />);

    // Check that both footnotes are rendered
    expect(screen.getByText(/This is the first footnote/)).toBeInTheDocument();
    expect(screen.getByText(/This is the second footnote/)).toBeInTheDocument();
  });

  it('renders HTML inside footnotes correctly', () => {
    render(<FooterComponent footNotes={footNotes} />);

    // Check that the anchor tags are correctly rendered inside footnotes
    expect(screen.getByText('Link 1')).toHaveAttribute('href', 'https://example.com');
    expect(screen.getByText('Link 2')).toHaveAttribute('href', 'https://example2.com');
  });

  it('applies the correct styles to the footer', () => {
    const { container } = render(<FooterComponent footNotes={footNotes} />);

    // Check the footer style
    const footer = container.querySelector('footer');
    expect(footer).toHaveStyle('background-color: #333');
    expect(footer).toHaveStyle('color: #fff');
    expect(footer).toHaveStyle('padding: 20px');
  });
});
