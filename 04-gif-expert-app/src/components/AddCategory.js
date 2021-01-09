import React from 'react'

export const AddCategory = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    let inputSearch = document.getElementById('searchCategory')
    let inputSearchValue = inputSearch.value

    if ( inputSearchValue ) {
      let newCategorie = {
        id: guidGenerator(),
        name: inputSearchValue
      }

      console.log( newCategorie )
      // setCategories( cats => [...cats, newCategorie] )

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
    <form onSubmit={ handleSubmit }>
      <h2>Add Category</h2>
      <div className="field has-addons mb-4 input-search">
        <div className="control">
          <input className="input" id="searchCategory" type="text" placeholder="Find a repository" />
        </div>
        <div className="control">
          <button className="button is-info" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  )
}
