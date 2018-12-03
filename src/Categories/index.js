import React from 'react';
import './style.css';

const Categories = () => {
  return (
    <div className='categoryContainer'>
      <h2 className='categoryContainerHeading'>Categories</h2> <br/>
      <p className='categoryContainerText'>Computer Science / Web Design</p>
      <p className='categoryContainerText'>Science</p>
      <p className='categoryContainerText'>Mathmatics</p>
      <p className='categoryContainerText'>Books</p>
      <p className='categoryContainerText'>Philosophy</p>
      <p className='categoryContainerText'>Music</p>
    </div>
  )
}

export default Categories;
