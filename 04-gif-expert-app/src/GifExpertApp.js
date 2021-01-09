import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertAppComponent = () => {
  const [ categories, setCategories ] = useState([
    { id: 'DragonBall', name: 'Dragon Ball'},
  ])

  return (
    <div className="container">
      <h2 className="is-size-5-mobile is-size-4 has-text-centered mt-4">Gif Expert App</h2>
      <hr />

      <AddCategory setCategories={ setCategories } />

      {
        categories.map( (category) => (
          <GifGrid key={ category.id } category={ category.name } />
        ))
      }
    </div>
  );
}
 
export default GifExpertAppComponent;