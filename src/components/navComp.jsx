import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavComp({ searchTerm, onSearchChange }) {
  return (
    <NavLink to='/search' style={{ width: '50%' }}>
      <input
        className='search'
        type='text'
        placeholder='What are you looking for ?'
        value={searchTerm}
        onChange={onSearchChange}
      />
    </NavLink>
  );
}
