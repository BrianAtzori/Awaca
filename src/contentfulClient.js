import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

//response.items[0].fields.quote1.content[0].content[0].content[0].value

export default async function getResourcesFromAPI(target, requestedEntry) {
  let payload = await client
    .getEntries({
      content_type: target,
    })
    .then((response) => {
      return response.items;
    })
    .catch(console.error);

  // console.log(payload)

  let dataFromAPI = responseReader(payload, target, requestedEntry);

  return dataFromAPI;
}

function responseReader(payload, type, requestedEntry) {
  // console.log(requestedEntry)

  // eslint-disable-next-line default-case
  switch (type) {
    case "quotes": {
      let quotesArray = [""];

      for (const property in payload[0].fields) {
        if (property !== "quotes") {
          quotesArray.push(
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
      

      // console.log(requestedEntry)

      //  requestedEntry = "WnwB791mFcR4m8UUzxm8q"

      // console.log(payload[1].fields)

      const selectedArticle = payload.find((element => element.sys.id === requestedEntry))

      return selectedArticle.fields
    }
  }
}
