import { useState } from "react";
import { FlexContent, Hero, Sales, Stories } from "./components";
import "./index.css";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists={true} />
        <FlexContent endpoint={highlight} ifExists={true} />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
}

export default App;
