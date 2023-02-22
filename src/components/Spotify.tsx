import React from "react";

//Maybe royalty free music is better?
//Disable audio

export default function Spotify() {

  return (
    <div className="container">
    <iframe
    title="spotifyEmbed"
      src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
  );
}
