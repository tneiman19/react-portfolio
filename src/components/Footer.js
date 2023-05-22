import React from "react";

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2a607c',
    color: 'white',
    width: '100%',
    height: '30px',
    borderTop: '10px solid lightgray',
  },
};



const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>This is the footer content.</p>
    </footer>
  );
};

export default Footer;
