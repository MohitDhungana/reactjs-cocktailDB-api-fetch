import React from 'react';

export default function SingleCocktail({ match }) {
  const { id } = match.params;
  return <h1>single cocktail page: {id}</h1>;
}
