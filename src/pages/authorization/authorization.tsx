import React, {ChangeEvent, FC, useState} from 'react';
import {useTypedDispatch} from "../../core/hooks/redux";
import {AuthorizationContainer, AuthorizationInner} from './styled';
import {Snackbar, Stack, TextField} from "@mui/material";
import {setAuthStatus} from "../../core/store/reducers/auth-slice";
import {useNavigate} from "react-router-dom";
import {CustomButton} from "../../core/styled-components/custom-button";
import USERS from "../../core/consts/users";
import {setUserData} from "../../core/store/reducers/user-slice";

const Authorization: FC = () => {
  const [login, setLogin] = useState<string>('Reg84569');
  const [password, setPassword] = useState<string>('Reg84569');
  const [isSnackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = USERS.find(user => user.login === login && user.password === password);

    if (user) {
      dispatch(setAuthStatus(true));
      dispatch(setUserData({name: login, favoritePokemonsIndices: user.favoritePokemonsIndices}));
      navigate('/user-page');
      return;
    }
    setSnackbarOpen(true);
  };

  return (
    <AuthorizationContainer>
      <AuthorizationInner>
        <Stack component='form' direction='column' alignItems='flex-end' width='100%' onSubmit={submitHandler}>
          <TextField
            required
            label='Login'
            variant='standard'
            fullWidth
            margin='dense'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            required
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='standard'
            fullWidth
            margin='dense'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomButton type='submit' size='medium' sx={{mt: 2}}>Login</CustomButton>
        </Stack>
        <Snackbar
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          open={isSnackbarOpen}
          onClose={() => setSnackbarOpen(false)}
          autoHideDuration={3000}
          message='Invalid login or password'
        />
      </AuthorizationInner>
    </AuthorizationContainer>
  );
};

export default Authorization;