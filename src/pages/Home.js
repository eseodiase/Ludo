import React from "react";
const Home = () => {
     return <section>
   <div className="search">
      <form>
      <h3 id="title">247 Lyrics Finder</h3>
      <label>Song name:</label>
      <input type="search" id="search-song" value="hello"/>
      <br/>
      <label>Artist name:</label>
    <input type="search" id="search-artist" value="adele"/>
    <p className="key"> Hit "Enter key" or tap "Search icon" on your keyboard/keypad to search.</p>
    </form>
    </div>

<section className="keyboard">
    <div className="iframeContainer">
    <h3>Song Lyrics</h3>
    <p id="lyrics">Loading...</p>
    </div>
    </section>

</section>;
    };

    export default Home;
