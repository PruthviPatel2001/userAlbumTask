import { BrowserRouter, Route, Routes } from "react-router-dom";

import Album from "./screen/Album";
import Header from "./components/common/Header";
import PhotoGallery from "./screen/PhotoGallery";
import React from "react";
import UserList from "./screen/UserList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/gallery/:id" element={<PhotoGallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
