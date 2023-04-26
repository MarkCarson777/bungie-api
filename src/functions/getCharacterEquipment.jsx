import axios from "axios";

const membershipType = 2;
const destinyMembershipId = "4611686018440140266";
const apiKey = "a798d7d065154b7895fb699091e173f4";

export const getCharacterEquipment = () => {
  axios
    .get(
      `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/?components=CharacterEquipment`,
      {
        headers: {
          "X-API-Key": apiKey,
        },
      }
    )
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
