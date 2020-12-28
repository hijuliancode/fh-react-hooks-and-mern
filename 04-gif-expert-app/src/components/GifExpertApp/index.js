import React, { useState } from 'react';

const GifExpertAppComponent = () => {
  const [ categories, setCategories ] = useState([
    { id: 'OnePunch', name: 'One Punch'},
    { id: 'SamuraiX', name: 'Samurai X'},
    { id: 'DragonBall', name: 'Dragon Ball'},
  ])

  const handleAdd = () => {
    let inputSearch = document.getElementById('searchCategory')
    let inputSearchValue = inputSearch.value

    if ( inputSearchValue ) {
      let newCategorie = {
        id: guidGenerator(),
        name: inputSearchValue
      }
      setCategories( cats => [...cats, newCategorie] )

      // Reset Input
      inputSearch.value = ''
      inputSearch.focus()
    }
  }

  function guidGenerator() { // Globally Unique IDentifier
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

  return (
    <div className="container">
      <h2 className="is-size-5-mobile is-size-4 has-text-centered mt-4">Gif Expert App</h2>
      <hr />

      <div className="field has-addons mb-4 input-search">
        <div className="control">
          <input className="input" id="searchCategory" type="text" placeholder="Find a repository" />
        </div>
        <div className="control">
          <button onClick={() => handleAdd()} className="button is-info" type="button">
            Search
          </button>
        </div>
      </div>

      {
        categories.map( (category) => {
          return <button key={category.id} className="button is-small is-primary is-outlined mr-1 mb-1">{category.name}</button>
        } )
      }

    </div>
  );
}
 
export default GifExpertAppComponent;