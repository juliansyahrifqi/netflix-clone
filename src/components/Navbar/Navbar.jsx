/* eslint linebreak-style: ["error", "windows"] */

import React, { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);

    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt="netflix-logo"
          className="nav__logo"
        />

        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user_avatar"
        />
      </div>
    </nav>
  );
}
