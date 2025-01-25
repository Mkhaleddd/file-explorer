import React, { useState } from 'react';
import Folder from './compotents/Folder';
import data from './compotents/data';

const App = () => {
  const [items, setItems] = useState([data]);

  return (
    <>
      {items.map((obj) => (
        <Folder key={obj.id} obj={obj} setItems={setItems} />
      ))}
    </>
  );
};

export default App;
