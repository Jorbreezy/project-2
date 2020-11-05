import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles/list.css';

const List = () => {
  const [games, setGames] = useState([]);
  const history = useHistory();

  const fetchGames = async () => {
    try {
      const res = await fetch('/api/games');
      const results = await res.json();

      setGames(results);
    } catch (err) {
      console.error(err);
    }
  };

  const redirectToItem = (id) => (
    history.push(`/games/${id}`)
  );

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div id='itemWrapper'>
      <div className='subtitle'>
        <h1>Games</h1>
        <hr />
      </div>
      <div className="list">
        {
          games.map(({ id, title }) => (
            <h2 key={title} className='card' onClick={() => redirectToItem(id)}>{title}</h2>
          ))
        }
      </div>
    </div>
  );
};

export default List;
