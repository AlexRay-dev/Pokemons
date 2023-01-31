import {Box, styled} from "@mui/material";

export const AuthorizationContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '60px'
}));
export const AuthorizationInner = styled(Box)(({theme}) => ({
  display: 'flex',
  maxWidth: '500px',
  width: '100%',
  padding: '20px',
  borderRadius: '5px',
  border: `2px solid ${theme.palette.primary.main}`,
  boxShadow: theme.shadows[10]
}));