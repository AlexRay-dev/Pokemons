import React, {Dispatch, FC, SetStateAction} from 'react';
import {DEFAULT_POKEMON_TYPE_FILTER} from "../../core/consts/config";
import {FormControl, MenuItem, Select, Typography} from "@mui/material";

interface PokemonTypeFilterProps {
  selectedType: string,
  setSelectedType: Dispatch<SetStateAction<string>>,
  pokemonTypes: string[],
}

const PokemonTypeFilter: FC<PokemonTypeFilterProps> = ({selectedType,setSelectedType,pokemonTypes}) => {
  return (
    <FormControl fullWidth size='small' sx={{mt: '.6rem'}}>
      <Typography variant='h6' mb='.1rem'>Filter by pokemon type</Typography>

      <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <MenuItem key='all' value={DEFAULT_POKEMON_TYPE_FILTER}>
          {DEFAULT_POKEMON_TYPE_FILTER}
        </MenuItem>
        {pokemonTypes.map((type) => (
          <MenuItem key={type} value={type}>{type}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PokemonTypeFilter;