
import PropTypes from 'prop-types';

const FooterComponent = ({ footNotes }) => {
  return (
    <footer style={styles.footer}>
      {footNotes.map(note => (
        <div key={note.id} style={styles.footNote}>
          <div dangerouslySetInnerHTML={{ __html: note.description }} />
        </div>
      ))}
    </footer>
  );
};

// Styles for the footer
const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  footNote: {
    marginBottom: '10px',
  },
};

FooterComponent.propTypes = {
  footNotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterComponent;
