import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const List = () => {
  const [makers, setMakers] = useState([]);
  const history = useHistory();

  const fetchMakers = async () => {
    try {
      const res = await fetch('/api/makers');
      const results = await res.json();

      setMakers(results);
    } catch (err) {
      console.error(err);
    }
  };

  const redirectToItem = (id) => (
    history.push(`/makers/${id}`)
  );

  useEffect(() => {
    fetchMakers();
  }, []);

  return (
    <div id='itemWrapper'>
      <div className='subtitle'>
        <h1>Makers</h1>
        <hr />
      </div>
      <div className="list">
        {
          makers.map(({ id, name }) => (
            <h2 key={name} className='card' onClick={() => redirectToItem(id)}>{name}</h2>
          ))
        }
      </div>
    </div>
  );
};

export default List;
