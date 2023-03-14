import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

//response.items[0].fields.quote1.content[0].content[0].content[0].value

export default async function getResourcesFromAPI(target) {
  let payload = await client
    .getEntries({
      content_type: target,
    })
    .then((response) => {
      return response.items[0].fields;
    })
    .catch(console.error);

  let dataFromAPI = responseReader(payload, target);

  return dataFromAPI;
}

function responseReader(payload, type) {
  // eslint-disable-next-line default-case
  switch (type) {
    case "quotes": {
      let quotesArray = [""];

      for (const property in payload) {
        if (property !== "quotes") {
          quotesArray.push(
            payload[property].content[0].content[0].content[0].value
          );
        }
      }
      return quotesArray;
    }
    case "images":{
      let imagesArray = [""];
      for (const property in payload) {
        if (property !== "quotes") {
          imagesArray.push(
            payload[property].fields.file.url
          );
        }
      }
      return imagesArray;
    }
  }
}
