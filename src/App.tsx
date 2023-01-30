import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;