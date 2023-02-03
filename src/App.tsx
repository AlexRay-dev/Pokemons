import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import Authorization from "./pages/authorization/authorization";
import UserPage from "./pages/user-page/user-page";

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/authorization' element={<Authorization/>}/>
        <Route path='/user-page' element={<UserPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;