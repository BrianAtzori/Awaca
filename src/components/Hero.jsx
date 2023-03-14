import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { stopLoading } from "../features/loader/loaderSlice";

import Quote from "./Quote";
import getResourcesFromAPI from "../contentfulClient";
import { ColorRing } from "react-loader-spinner";

export default function Hero() {
  const [quote, setQuote] = useState("");
  const [cover, setCover] = useState();
  const loading = useSelector((state) => state.loader.value);
  const dispatch = useDispatch();

  async function getQuote() {
    let retrievedQuotes = await getResourcesFromAPI("quotes");

    let singleQuote =
      retrievedQuotes[
        Math.floor(Math.random() * (retrievedQuotes.length - 1 - 1) + 0)
      ];

    // console.log(singleQuote)

    setQuote(singleQuote);
  }

  async function getCover() {
    let retrievedCovers = await getResourcesFromAPI("images");

    let singleCover =
      retrievedCovers[
        Math.floor(Math.random() * (retrievedCovers.length - 1 - 1) + 0)
      ];
    // console.log(singleCover)
    setCover(singleCover);
  }

  function loadHero() {
    getQuote();
    getCover();
  }

  useEffect(() => {
    loadHero();
    dispatch(stopLoading());
  }, []);

  return (
    <>
        <div
          className="absolute -z-10 flex flex h-2/4 w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-12 text-center text-2xl opacity-75 2xl:h-1/3 2xl:text-4xl"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <ColorRing
            visible={loading}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#A065BB", "#39DDC4", "#F86A83", "#FFBA00", "#646DC3"]}
          />
          {<Quote quote={quote}></Quote>}
        </div>
    </>
  );
}
