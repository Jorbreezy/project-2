import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles/nav.css';

const Nav = () => {
  const history = useHistory();

  return (
  <nav id='header'>
    <button id='icon' onClick={() => history.push('/games')}>
      <h1>Gameserfy</h1>
    </button>
    <div className='right'>
      <ul id='navUl'>
        <li>
          <Link to='/games'>Games</Link>
        </li>
        <li>
          <Link to='/makers'>Makers</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Nav;
