import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles/item.css';

const Item = ({ match }) => {
  const [game, setGame] = useState({});
  const history = useHistory();

  const fetchItemData = async () => {
    const { params: { id } } = match;

    try {
      const res = await fetch(`/api/games/${id}`);
      const results = await res.json();

      setGame(results);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteGame = async () => {
    const { params: { id } } = match;

    try {
      await fetch(`/api/games/${id}`, { method: 'DELETE' });
      history.push('/games');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItemData();
  }, []);

  return (
    <div id='details'>
      <section className='title'>
        <h1>{game.title}</h1>
        <hr />
      </section>
      <section className='info'>
        <p>Publisher: {game.maker}</p>
        <p>Type: {game.type}</p>
        <p>Price: {game.price}</p>
      </section>
      <section>
        <button onClick={deleteGame}>Button</button>
      </section>
    </div>
  );
};

export default Item;
