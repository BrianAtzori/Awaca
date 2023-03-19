import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { stopLoading } from "../features/loader/loaderSlice";
import getResourcesFromAPI from "../contentfulClient";
import { sample } from "lodash";
import defaultCover from "../assets/images/background_pic_sample.jpg";
import Quote from "./Quote";
import { ColorRing } from "react-loader-spinner";
import { Fade } from "react-awesome-reveal";

//Hero Component that receive an image and a quote from the CMS, and it displays the image as a background and the quote

export default function Hero() {

  //Fallback
  const defaultQuote =
    "Meditation is not about stopping thoughts, but recognizing that we are more than our thoughts and our feelings.";

  const [quote, setQuote] = useState("");
  const [cover, setCover] = useState();
  const loading = useSelector((state) => state.loader.value);
  const dispatch = useDispatch();

  async function getQuote() {
    let retrievedQuotes = await getResourcesFromAPI("quotes");

    let singleQuote = sample(retrievedQuotes);

    //Sometimes the API randomly return a blank content
    setQuote(singleQuote === "" ? defaultQuote : singleQuote);
  }

  async function getCover() {
    let retrievedCovers = await getResourcesFromAPI("images");

    let singleCover = sample(retrievedCovers);
    //Sometimes the API randomly return a blank content
    setCover(singleCover === "" ? defaultCover : singleCover);
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
        className="absolute -z-10 flex h-2/4 w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-12 text-center text-2xl opacity-75 transition-all ease-in-out 2xl:h-1/3 2xl:text-4xl"
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
        {
          <Fade direction="down" delay={500}>
            <Quote quote={quote}></Quote>
          </Fade>
        }
      </div>
    </>
  );
}
