import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntryPage from "./pages/EntryPage";
import LogInPage from "./pages/LogInPage";
import "./App.css";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="login" element={<LogInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
