import axios from "axios";

const BASE_URL = "https://www.bungie.net/platform";
const getHeaders = (apiKey: string) => ({
  headers: {
    "X-API-Key": apiKey,
  },
});

const fetchData = (url: string, apiKey: string) => {
  return axios
    .get(url, getHeaders(apiKey))
    .then((response) => {
      return response.data.Response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getBungieNetUser = (
  membershipId: string,
  membershipType: number,
  apiKey: string
) => {
  const url = `${BASE_URL}/User/GetMembershipsById/${membershipId}/${membershipType}/`;
  return fetchData(url, apiKey);
};

export const getCharacterEquipment = (membershipId: string, apiKey: string) => {
  const url = `${BASE_URL}/Destiny2/2/Profile/${membershipId}/?components=CharacterEquipment`;
  return fetchData(url, apiKey);
};

export const getClassDefinition = (classHash: number, apiKey: string) => {
  const url = `${BASE_URL}/Destiny2/Manifest/DestinyClassDefinition/${classHash}/`;
  return fetchData(url, apiKey);
};

export const getDestinyCharacters = (membershipId: string, apiKey: string) => {
  const url = `${BASE_URL}/Destiny2/2/Profile/${membershipId}/?components=Characters`;
  return fetchData(url, apiKey);
};

export const getItemDetails = (itemHash: number, apiKey: string) => {
  const url = `${BASE_URL}/Destiny2/Manifest/DestinyInventoryItemDefinition/${itemHash}/`;
  return fetchData(url, apiKey);
};
