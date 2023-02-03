import React, {Dispatch, FC, SetStateAction} from 'react';
import {POKEMONS_LIMIT} from "../../core/consts/config";
import {Pagination} from "@mui/material";

interface ICustomPaginationProps {
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  totalPokemonCount: number,
}

const CustomPagination: FC<ICustomPaginationProps> = ({totalPokemonCount, setCurrentPage, currentPage}) => {
  return (
    <Pagination
      count={Math.ceil(totalPokemonCount / POKEMONS_LIMIT)}
      sx={{m: '10px 0'}}
      page={currentPage}
      onChange={(event, value) => {
        setCurrentPage(value);
      }}/>
  );
};

export default CustomPagination;