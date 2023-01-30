import React, {FC} from 'react';
import {AppBar, Container, Typography} from "@mui/material";
import {StyledToolbar} from './styled';

const Header: FC = () => {
  return (
    <AppBar position='static'>
      <Container>
        <StyledToolbar disableGutters>
          <Typography variant='h3'>Pokemons</Typography>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Header;