import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import ViewPage from "./components/ViewPage";
import { UserProvider } from "./Context";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/viewpage/:id" element={<ViewPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
