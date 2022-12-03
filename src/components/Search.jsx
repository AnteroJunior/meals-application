import React, { useState } from "react";
import { useGlobalContext } from '../context';

const Search = () => {

  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      setText('');
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm('');
    setText('');
    fetchRandomMeal();
  }

  return (
    <header>
      <form className='search-input d-flex align-items-center justify-content-center p-2 pt-5
      ' onSubmit={handleSubmit}>
        <input type='text' placeholder='Meal name...' className='form-control w-50' value={text} onChange={handleChange} />
        <div className='d-flex justify-content-center align-items-center gap-2 mx-2'>
          <button className='btn'>Search</button>
          <button className='btn btn-hipster' onClick={handleRandomMeal}>Random meal</button>
        </div>
      </form>
    </header>
  )
}

export { Search }