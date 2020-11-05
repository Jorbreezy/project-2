import React, { useState, useEffect } from 'react';

const Item = ({ match }) => {
  const [maker, setMaker] = useState({});

  const fetchItemData = async () => {
    const { params: { id } } = match;

    try {
      const res = await fetch(`/api/makers/${id}`);
      const results = await res.json();

      setMaker(results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItemData();
  }, []);

  return (
    <>
      <h1>{maker.name}</h1>
    </>
  );
};

export default Item;
