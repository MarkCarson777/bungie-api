import axios from "axios";

const BASE_URL = "https://www.bungie.net/Platform";
const getHeaders = {
  headers: {
    "X-API-Key": import.meta.env.VITE_BUNGIE_API_KEY,
  },
};
const membershipId = import.meta.env.VITE_BUNGIE_MEMBERSHIP_ID;
const membershipType = import.meta.env.VITE_BUNGIE_MEMBERSHIP_TYPE;

const fetchData = (url: string) => {
  return axios
    .get(url, getHeaders)
    .then((response) => {
      return response.data.Response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getBungieNetUser = () => {
  const url = `${BASE_URL}/User/GetMembershipsById/${membershipId}/${membershipType}/`;
  return fetchData(url);
};

// See the DestinyComponentType enum for a list of valid components
// https://bungie-net.github.io/#/components/schemas/Destiny.DestinyComponentType

export const getCharacter = (characterId: string) => {
  const url = `${BASE_URL}/Destiny2/2/Profile/${membershipId}/Character/${characterId}/?components=Characters`;
  return fetchData(url);
};

export const getCharacterEquipment = () => {
  const url = `${BASE_URL}/Destiny2/2/Profile/${membershipId}/?components=CharacterEquipment`;
  return fetchData(url);
};

export const getClassDefinition = (classHash: number) => {
  const url = `${BASE_URL}/Destiny2/Manifest/DestinyClassDefinition/${classHash}/`;
  return fetchData(url);
};

export const getDestinyCharacters = () => {
  const url = `${BASE_URL}/Destiny2/2/Profile/${membershipId}/?components=Characters`;
  return fetchData(url);
};

export const getItemDetails = (itemHash: number) => {
  const url = `${BASE_URL}/Destiny2/Manifest/DestinyInventoryItemDefinition/${itemHash}/`;
  return fetchData(url);
};
