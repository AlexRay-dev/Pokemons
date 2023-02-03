import React, {FC, useEffect, useState} from 'react';
import {CardMedia, Grid, Typography} from "@mui/material";
import {PokemonsCardContent, PokemonsCardInner} from "./styled";
import {DetailedPokemon} from "../../core/types/pokemons";
import {IMAGE_PLACEHOLDER} from "../../core/consts/api";
import {getPokemonTypesString} from "./utils";

interface PokemonsItemProps {
  pokemon: DetailedPokemon,
}

const PokemonsItem: FC<PokemonsItemProps> = React.memo(({pokemon}) => {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    const imageUrl = pokemon.sprites.front_shiny;
    const imageLoader = new Image();
    imageLoader.src = imageUrl;
    imageLoader.onload = () => setImage(imageUrl);
    imageLoader.onerror = () => setImage(`${IMAGE_PLACEHOLDER.URL}/268x194?text=image not found`);
  }, [pokemon.sprites.front_shiny]);

  return (
    <Grid item xs={6} md={4} lg={3}>
      <PokemonsCardInner>
        <CardMedia
          component="img"
          height="194"
          image={image}
        />
        <PokemonsCardContent>
          <Typography variant='body1'>Name: {pokemon.name}</Typography>
          <Typography variant='body1'>Base experience: {pokemon.base_experience}</Typography>
          <Typography variant='body1'>Height: {pokemon.height}</Typography>
          <Typography variant='body1'>Weight: {pokemon.weight}</Typography>
          <Typography variant='body1'>Types: {getPokemonTypesString(pokemon)}</Typography>
        </PokemonsCardContent>
      </PokemonsCardInner>
    </Grid>
  );
});

export default PokemonsItem;