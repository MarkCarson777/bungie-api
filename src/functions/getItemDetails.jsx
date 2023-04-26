import axios from "axios";

export const getItemDetails = (itemHash, apiKey) => {
  const request = axios.get(
    `https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${itemHash}/`,
    {
      headers: {
        "X-API-Key": apiKey,
      },
    }
  );

  request
    .then((response) => {
      return response.data.Response;
    })
    .catch((error) => {
      console.log(error);
    });

  return request;
};
