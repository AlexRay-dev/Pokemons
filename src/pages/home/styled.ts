import {Box, Card, styled} from "@mui/material";

export const PokemonsCardInner = styled(Card)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  maxHeight: "400px",
  boxShadow: theme.shadows[10],
  border: `1px solid ${theme.palette.primary.main}`,
}));

export const PokemonsCardContent = styled(Box)(() => ({
  padding: '5px 10px 5px'
}));

