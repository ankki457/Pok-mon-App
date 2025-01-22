import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card shadow-sm">
      <img src={pokemon.image} className="card-img-top" alt={pokemon.name} />
      <div className="card-body text-center">
        <h5 className="card-title text-capitalize">{pokemon.name}</h5>
      </div>
    </div>
  );
};

export default PokemonCard;
