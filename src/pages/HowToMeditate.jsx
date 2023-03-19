import React, { useEffect, useState } from "react";
import getResourcesFromAPI from "../contentfulClient";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { stopLoading } from "../features/loader/loaderSlice";
import { ColorRing } from "react-loader-spinner";
import SectionTitle from "../components/SectionTitle";
import Article from "../components/Article";
import Footer from "../components/Footer";

export default function HowToMeditate() {
  const [article, setArticle] = useState("");

  const loading = useSelector((state) => state.loader.value);
  const dispatch = useDispatch();

  async function getArticle() {
    let mergedArticle = await getResourcesFromAPI(
      "meditationArticle",
      "WnwB791mFcR4m8UUzxm8q"
    );
    setArticle(mergedArticle);
  }

  useEffect(() => {
    getArticle();
    dispatch(stopLoading());
  }, []);

  const articleToRender = (
    <>
      <SectionTitle
        title={article.title}
        subTitle={article.subtitle}
      ></SectionTitle>
      <Article text={article.article}></Article>
    </>
  );

  const loader = (
    <ColorRing
      visible={loading}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#A065BB", "#39DDC4", "#F86A83", "#FFBA00", "#646DC3"]}
    />
  );

  return (
    <>
      <div className="container mx-auto flex flex-col gap-5 p-8 ">
        {article === undefined ? loader : articleToRender}
      </div>
      <Footer></Footer>
    </>
  );
}
