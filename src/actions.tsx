import axios from "axios";

export const getBungieNetUser = (
  membershipId: string,
  membershipType: number,
  apiKey: string
) => {
  return axios
    .get(
      `https://www.bungie.net/platform/User/GetMembershipsById/${membershipId}/${membershipType}/`,
      {
        headers: {
          "X-API-Key": apiKey,
        },
      }
    )
    .then((response) => {
      return response.data.Response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCharacterEquipment = (membershipId: string, apiKey: string) => {
  return axios
    .get(
      `https://www.bungie.net/Platform/Destiny2/2/Profile/${membershipId}/?components=CharacterEquipment`,
      {
        headers: {
          "X-API-Key": apiKey,
        },
      }
    )
    .then((response) => {
      return response.data.Response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getClassDefinition = (classHash: number, apiKey: string) => {
  return axios
    .get(
      `https://www.bungie.net/Platform/Destiny2/Manifest/DestinyClassDefinition/${classHash}/`,
      {
        headers: {
          "X-API-Key": apiKey,
        },
      }
    )
    .then((response) => {
      return response.data.Response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDestinyCharacters = (membershipId: string, apiKey: string) => {
  return axios
    .get(
      `https://www.bungie.net/Platform/Destiny2/2/Profile/${membershipId}/?components=Characters`,
      {
        headers: {
          "X-API-Key": apiKey,
        },
      }
    )
    .then((response) => {
      return response.data.Response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getItemDetails = (itemHash: string, apiKey: string) => {
  return axios
    .get(
      `https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${itemHash}/`,
      {
        headers: {
          "X-API-Key": apiKey,
        },
      }
    )
    .then((response) => {
      console.log("itemDetails", response.data.Response);
      return response.data.Response;
    })
    .catch((error) => {
      console.log(error);
    });
};
