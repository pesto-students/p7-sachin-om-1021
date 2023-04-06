import React from "react";
const api = "https://api.shrtco.de/v2/shorten?url=";

export default function Shortener({ url, setShortUrl, setUrl, shortUrl }) {
  function handleClick() {
    async function Fetch() {
      const data = await fetch(api + url);
      const dataJson = await data.json();
      setShortUrl([dataJson.result.short_link, ...shortUrl]);
    }
    Fetch();
  }

  return (
    <div>
      <div className="shortenerDiv">
        <div className="inputDiv">
          <input
            id="urlInput"
            type="text"
            placeholder="Enter your url here"
            value={url}
            onChange={(event) => {
              setUrl(event.target.value);
            }}
          ></input>
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
      <div className="list">
        <h1>Shortened Url's</h1>
        <p>urls will appear in the area down below</p>
        <div className="urlList">
          <ol>
            {shortUrl.map((el) => (
              <li>
                <a href={`https://${el}`}>{el}</a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
