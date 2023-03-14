import React from "react";

//Maybe royalty free music is better?
//Disable audio

export default function Spotify() {
  return (
    <section className="container mt-10 lg:w-4/12">
      <h2 className="text-palette-color-whitesmoke font-dosis font-bold text-lg bg-palette-color-yellow pl-2 pr-2 rounded-md text-center mb-6">Here you can activate your background music:</h2>
      <iframe
        title="spotifyEmbed"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
}
