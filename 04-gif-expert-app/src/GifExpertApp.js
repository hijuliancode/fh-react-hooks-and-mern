import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertAppComponent = () => {
  const [ categories, setCategories ] = useState([
    { id: 'OnePunch', name: 'One Punch'},
    { id: 'SamuraiX', name: 'Samurai X'},
    { id: 'DragonBall', name: 'Dragon Ball'},
  ])

  return (
    <div className="container">
      <h2 className="is-size-5-mobile is-size-4 has-text-centered mt-4">Gif Expert App</h2>
      <hr />

      <AddCategory setCategories={ setCategories } />

      {
        categories.map( (category) => {
          return <button key={category.id} className="button is-small is-primary is-outlined mr-1 mb-1">{category.name}</button>
        } )
      }

    </div>
  );
}
 
export default GifExpertAppComponent;