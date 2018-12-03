import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categoryContainer'>
      <h2 className='categoryContainerHeading'>Categories</h2> <br/>
      <Link className='categoryContainerText' to='/compsciewebdes'>
        <p>Computer Science / Web Design</p>
      </Link>
      <Link className='categoryContainerText' to='/science'>
        <p>Science</p>
      </Link>
      <Link className='categoryContainerText' to='/books'>
        <p>Books</p>
      </Link>
      <Link className='categoryContainerText' to='/mathematics'>
        <p>Mathematics</p>
      </Link>
      <Link className='categoryContainerText' to='/philosophy'>
        <p>Philosophy</p>
      </Link>
      <Link className='categoryContainerText' to='/music'>
        <p>Music</p>
      </Link>

    </div>
  )
}

export default Categories;
