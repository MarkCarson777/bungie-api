import axios from "axios";

export const getItemDetails = (itemHash, apiKey) => {
  axios
    .get(
      `https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${itemHash}/`,
      {
        headers: {
          "X-API-Key": apiKey,
        },
      }
    )
    .then((response) => {
      console.log(response.data.Response);
    })
    .catch((error) => {
      console.log(error);
    });
};
