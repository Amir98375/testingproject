
import PropTypes from 'prop-types';

const ErrorComponent = ({ message }) => {
  return (
    <div style={{ color: 'red', padding: '10px', border: '1px solid red' }}>
      {message || 'An error occurred!'}
    </div>
  );
};

ErrorComponent.propTypes = {
  message: PropTypes.string,
};

export default ErrorComponent;
