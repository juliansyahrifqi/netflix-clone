import React from 'react';
import './Banner.css';

export default function Banner() {
  const truncate = (string, n) => (string?.length > n ? `${string.substring(0, n - 1)}...` : string);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: 'url(\'https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/f3672704-1713-49fb-8c59-e6cea1f25fd7/ID-en-20221128-popsignuptwoweeks-perspective_alpha_website_medium.jpg\')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          Movie Name
        </h1>
        <div className="banner__buttons">
          <button type="button" className="banner__button">Play</button>
          <button type="button" className="banner__button">My List</button>
        </div>

        <h3 className="banner__description">
          {truncate('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dolorum repudiandae quae, expedita velit adipisci temporibus ex maxime veritatis voluptatum cumque id molestiae voluptates itaque facilis eveniet fugit, aspernatur ipsa', 150)}
        </h3>
      </div>

      <div className="banner--fadeButton" />
    </header>
  );
}
