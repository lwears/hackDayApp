import React from 'react';
import Search from './Search';
import '../css/Header.css';

export default function Header(props) {
  const { search } = props;
  return (
    <header>
      <h1>Cocktailify</h1>
      <Search search={search} />
    </header>
  );
}
