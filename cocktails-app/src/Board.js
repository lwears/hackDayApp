import React from 'react';
import Card from './Card';
import './board.css';

export default function Board(props) {
  return (
    <div className="cocktails-board">
      {props.drinks.drinks.map((drink, i) => <Card drink={drink} key={i} />)}
    </div>
  );
}