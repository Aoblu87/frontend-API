import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/BlogNavbar";
import Blog from "./views/blog/Blog";
import Home from "./views/home/Home";
import NewBlogPost from "./views/new/New";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState();
  console.log(result);
  return (
    <Router>
      <NavBar query={query} setQuery={setQuery} setResult={setResult} />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home query={query} setQuery={setQuery} result={result} />}
        />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/new" element={<NewBlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
