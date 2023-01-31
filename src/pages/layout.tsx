import React, {FC} from 'react';
import Header from "../components/header/header";
import {Outlet} from "react-router-dom";
import {Container, CssBaseline} from "@mui/material";

const Layout: FC = () => {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Container sx={{pt: 2}}>
        <Outlet/>
      </Container>
    </>
  );
};

export default Layout;