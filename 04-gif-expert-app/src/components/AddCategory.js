import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const inputSearchElm = document.getElementById('searchCategory')
  const [ inputSearchValue, setInputSearchValue ] = useState('');

  const handleInputChange = (e) => {
    setInputSearchValue( e.target.value )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( inputSearchValue.trim().length > 2 ) {
      let newCategory = {
        id: guidGenerator(),
        name: inputSearchValue
      }
      setCategories( cats => [newCategory, ...cats] )

      setInputSearchValue('')
      inputSearchElm.focus()
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
      <h2 className="mb-1 is-size-6">Add Category</h2>
      <div className="field has-addons mb-4 input-search">
        <div className="control">
          <input
            className="input"
            id="searchCategory"
            type="text"
            placeholder="Find a repository"
            value={ inputSearchValue }
            onChange={ handleInputChange } />
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

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}