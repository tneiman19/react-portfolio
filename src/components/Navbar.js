import React from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();

  const isActiveLink = (pathname) => {
    return location.pathname === pathname;
  };

  return (

      <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li>
          <Link to="/" style={isActiveLink("/") ? styles.activeLink : styles.link}>
            About
          </Link>
        </li>
        {/* <li>
          <Link to="/" style={isActiveLink("/about") ? styles.activeLink : styles.link}>
            About
          </Link>
        </li> */}
        <li>
          <Link to="/projects" style={isActiveLink("/projects") ? styles.activeLink : styles.link}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" style={isActiveLink("/contact") ? styles.activeLink : styles.link}>
            Contact
          </Link>
        </li>
      </ul>
      
    </nav>


  );
};

const styles = {
  navbar: {
    position: 'fixed',
     op: 1,
    backgroundColor: '#2a607c',
    color: 'white',
    width: '100%',
    height: '50px',
    borderBottom: '10px solid lightgray',
    padding: '10px 10px',
    marginBottom: '20px',
    marginTop: '3.4rem',
    zIndex: 1

  
  },
  navbarList: {
    display: "flex",
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  link: {
    textDecoration: "none",
    color: "white",
    margin: "0 10px",
    fontWeight: "normal",
    transition: "color 0.3s ease",
  },
  activeLink: {
    color: "blue",
    fontWeight: "bold",
    textDecoration: 'none'
  },
};

export default Navbar;
