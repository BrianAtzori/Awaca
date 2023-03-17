//A simple file to split the array of spotify playlists and the randomize method to display each time a different playlist, in this way i can add a playlist from here in a simple way without touching the rendering code

import _, { sample } from "lodash";

const playlists = [
  <iframe
    title="spotifyEmbed"
    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=generator"
    width="100%"
    height="352"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>,
  <iframe
    src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u?utm_source=generator"
    width="100%"
    height="352"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>,
  <iframe
    src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcvykn1vm7iP?utm_source=generator"
    width="100%"
    height="352"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>,
  <iframe
    style="border-radius:12px"
    src="https://open.spotify.com/embed/playlist/5Q1ioC0HpMLauTOapXxmXH?utm_source=generator"
    width="100%"
    height="352"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>,
  <iframe
    style="border-radius:12px"
    src="https://open.spotify.com/embed/playlist/37i9dQZF1DWURfu7Lk3xJ1?utm_source=generator"
    width="100%"
    height="352"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>,
];

export default function randomizePlaylist() {
  return _.sample(playlists)
}
