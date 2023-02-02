import {styled, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";

export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}));
export const StyledHeaderLink = styled(NavLink)(() => ({
  textDecoration: 'none',
  fontSize: '20px',
  color: 'white',
  ':hover': {
    textDecoration: 'underline',
  },
  ':not(:last-child)': {
    marginRight: '25px',
  }
}));