import { createClient } from "contentful";

//Standard code from Contentful API to create the client
const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

//Function to download data from the CMS API and then call the function to manage data
export default async function getResourcesFromAPI(target, requestedEntry) {
  //target parameter used to call the right content-type in the CMS
  let payload = await client
    .getEntries({
      content_type: target,
    })
    .then((response) => {
      return response.items;
    })
    .catch(console.error);

  //payload = response from API | target = i know the type of content | requestedEntry = i know what article i need

  let dataFromAPI = responseReader(payload, target, requestedEntry);

  return dataFromAPI;
}

//Function to switch sets of code to manage the type of data i need
function responseReader(payload, type, requestedEntry) {
  // eslint-disable-next-line default-case
  switch (type) {
    case "quotes": {
      let quotesArray = [""];
      for (const property in payload[0].fields) {
        //"quotes" is an useless property in the array
        if (property !== "quotes") {
          quotesArray.push(
            //Complicated CMS Structure
            payload[0].fields[property].content[0].content[0].content[0].value
          );
        }
      }
      return quotesArray;
    }
    case "images": {
      let imagesArray = [""];
      for (const property in payload[0].fields) {
        if (property !== "quotes") {
          imagesArray.push(payload[0].fields[property].fields.file.url);
        }
      }
      return imagesArray;
    }
    case "meditationArticle": {
      const selectedArticle = payload.find(
        (element) => element.sys.id === requestedEntry
      );

      return selectedArticle.fields;
    }
    case "infoPage": {
      return payload[0].fields;
    }
    case "links": {
      let linksToRender = [];

      payload.forEach((element) => {
        linksToRender.push(element.fields);
      });

      return linksToRender;
    }
  }
}
