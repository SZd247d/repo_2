import React from 'react';
import Spinner from '../ui/Spinner';
import Character from './Character';

const CharacterGrid = ({ items, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map(item => (
        <Character key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
