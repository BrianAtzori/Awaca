import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import randomizePlaylist from "../playlistStorage";

//A component used to renders a random generated iframe that contains and embed spotify playlist

export default function Spotify() {
  const [playlist, setPlaylist] = useState(false);

  useEffect(() => {
    //From playlist storage
    setPlaylist(randomizePlaylist());
  }, []);

  return (
    <section className="container mt-10 lg:w-4/12">
      <h2 className="mb-6 rounded-md bg-palette-color-darker pl-2 pr-2 text-center font-dosis text-lg font-bold text-palette-color-whitesmoke 2xl:text-3xl">
        Here you can activate your background music:
      </h2>
      <Fade direction="right"> {playlist}</Fade>
    </section>
  );
}
