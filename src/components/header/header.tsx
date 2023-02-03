import React, {FC} from 'react';
import {AppBar, Container, Stack} from "@mui/material";
import {StyledHeaderLink, StyledToolbar} from './styled';
import {useTypedDispatch, useTypedSelector} from "../../core/hooks/redux";
import {selectAuth, setAuthStatus} from "../../core/store/reducers/auth-slice";

const Header: FC = () => {
  const dispatch = useTypedDispatch();
  const {isAuth} = useTypedSelector(selectAuth);

  const onLogout = () => {
    dispatch(setAuthStatus(false));
  };

  return (
    <AppBar position='static'>
      <Container>
        <StyledToolbar disableGutters>
          <Stack direction='row'>
            <StyledHeaderLink to='/'>Pokemons</StyledHeaderLink>
            {isAuth && <StyledHeaderLink to='/user-page'>My page</StyledHeaderLink>}
          </Stack>
          {!isAuth
            ? <StyledHeaderLink to='/authorization'>Login</StyledHeaderLink>
            : <StyledHeaderLink to='/' onClick={onLogout}>Logout</StyledHeaderLink>
          }
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Header;