import React, {FC} from 'react';
import {CardMedia,  Grid, Typography} from "@mui/material";
import {PokemonsCardContent, PokemonsCardInner} from "./styled";

interface PokemonsItemProps {
  pokemon: any
}

const PokemonsItem: FC<PokemonsItemProps> = ({pokemon}) => {
  return (
    <Grid item xs={6}  md={4} lg={3} >
      <PokemonsCardInner>
        <CardMedia
          component="img"
          height="194"
          image={pokemon.sprites.front_shiny}
        />
        <PokemonsCardContent>
          <Typography variant='body1'>Name: {pokemon.name}</Typography>
          <Typography variant='body1'>Base experience: {pokemon.base_experience}</Typography>
          <Typography variant='body1'>Height: {pokemon.height}</Typography>
          <Typography variant='body1'>Weight: {pokemon.weight}</Typography>
        </PokemonsCardContent>
      </PokemonsCardInner>
    </Grid>
  );
};

export default PokemonsItem;