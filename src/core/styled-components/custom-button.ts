import {Button, styled} from "@mui/material";

export const CustomButton = styled(Button)(({theme}) => ({
  backgroundColor: 'inherit',
  padding: '5px 15px',
  border: `1px solid ${theme.palette.primary.main}`,
  textTransform: 'none',
  '&:hover': {
    outline: `1px solid ${theme.palette.primary.main}`
  }
}));