import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import Shortener from "./components/Shortener";
import Boost from "./components/Boost";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState([]);

  return (
    <div className="App">
      <Header />
      <Boost />
      <Shortener
        shortUrl={shortUrl}
        setShortUrl={setShortUrl}
        url={url}
        setUrl={setUrl}
      />
    </div>
  );
}

export default App;
