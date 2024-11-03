import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Management from "./pages/Management";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          {/* Global */}
          <Route path="/" element={<Home />} />
          <Route path="/management" element={<Management />} />
          <Route path="/*" element={<PageNotFound />} />

          <Route path="/management/create/" element={<Create/>} />
          <Route path="/management/update/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
