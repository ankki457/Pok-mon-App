import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokeDetails = await axios.get(pokemon.url);
            return {
              id: pokeDetails.data.id,
              name: pokeDetails.data.name,
              image: pokeDetails.data.sprites.front_default,
            };
          })
        );
        setPokemonList(pokemonData);
        setFilteredPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemon();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Pokémon Search</h1>
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <div className="row mt-4">
        {filteredPokemon.map((pokemon) => (
          <div key={pokemon.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
