import React, { useEffect, useState } from "react";
import getResourcesFromAPI from "../contentfulClient";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { stopLoading } from "../features/loader/loaderSlice";
import { ColorRing } from "react-loader-spinner";
import Card from "../components/Card";
import Footer from "../components/Footer"

export default function About() {
  const [linksArray, setLinksArray] = useState([]);

  const loading = useSelector((state) => state.loader.value);
  const dispatch = useDispatch();

  async function getLinks() {
    let links = await getResourcesFromAPI("links");

    setLinksArray(links);
  }

  useEffect(() => {
    getLinks();
    dispatch(stopLoading());
  }, []);

  const linksToRender = (
    <>
      {linksArray.map( (link) => { return <Card featuredImage={link.linkImage.fields.file.url} cardLink={link.link} linkName={link.name}></Card>})}
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
      {linksArray === undefined ? loader : linksToRender}
    </div>
    <Footer></Footer>
    </>

  );
}
