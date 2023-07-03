import React from "react";

const iframeStyles = {
    width: '100%',
    height: '100vh',
    paddingTop: '100px',

    
};

const Credentials = () => {
    return (

        <iframe
            title="Rutgers Coding Bootcamp Graduation"
            src="https://docs.credentials.rutgers.edu/embed/5b639fdd-284e-4e0d-833c-ce4c14196cea"
            style={iframeStyles}
            frameBorder="0"
            allowFullScreen
        ></iframe>

        
        
        
    );
};



export default Credentials;