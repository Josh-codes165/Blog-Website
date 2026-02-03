import React from "react";
import { Suspense } from "react";
import Suspenses from "./Components/Suspenses";
import Errorboundary from "./Components/Errorboundary.Jsx";
import { Routes, Route } from "react-router-dom";
const About = React.lazy(() => import("./pages/About"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogDetails = React.lazy(() => import("./pages/BlogDetails"));
const NavBar = React.lazy(() => import("./Components/NavBar"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <NavBar />
      <Errorboundary fallback="Something went wrong">
        <Suspense fallback={<Suspenses />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Errorboundary>
    </>
  );
}

export default App;
