// src/components/ErrorComponent.test.jsx
import { render, screen ,act} from '@testing-library/react';
import ErrorComponent from './Error';

describe('ErrorComponent', () => {
  it('renders the default error message when no message prop is provided', () => {
    act(() => {
        render(<ErrorComponent />);
      });

    const errorMessage = screen.getByText(/an error occurred/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders the provided error message', () => {
    const customMessage = 'Something went wrong!';
    render(<ErrorComponent message={customMessage} />);

    const errorMessage = screen.getByText(customMessage);
    expect(errorMessage).toBeInTheDocument();
  });

  it('applies the correct styles', () => {
    render(<ErrorComponent message="Styled Error" />);

    const errorMessage = screen.getByText('Styled Error');
    expect(errorMessage).toHaveStyle('color: red');
    expect(errorMessage).toHaveStyle('border: 1px solid red');
    expect(errorMessage).toHaveStyle('padding: 10px');
  });
});
