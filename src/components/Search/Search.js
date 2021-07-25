import React, { useState } from 'react'

import { classes } from '../../services/utils';

import style from './Search.module.scss';

import { SearchIcon } from '../UI/Icons/Icons';

export const Search = () => {
  const [searchValue, setSearchValue] = useState();

  const onSearch = () => {
    console.log(searchValue);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
      className={classes([style.search, "h-relative"])}
    >
      <input
        type="text"
        name="search"
        autoFocus
        className={style.search}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Vyhledávání"
      />
      <button type="submit" className={style['search-button']}>
        <SearchIcon />
      </button>
    </form>
  );
}

