import React, { useEffect, useState } from "react";

import randomizePlaylist from "../playlistStorage";

export default function Spotify() {

  const [playlist, setPlaylist] = useState(false);

  useEffect(() => {
    setPlaylist(randomizePlaylist());
  }, []);

  return (
    <section className="container mt-10 lg:w-4/12">
      <h2 className="mb-6 rounded-md bg-palette-color-yellow pl-2 pr-2 text-center font-dosis text-lg font-bold text-palette-color-whitesmoke">
        Here you can activate your background music:
      </h2>
      {playlist}
    </section>
  );
}
