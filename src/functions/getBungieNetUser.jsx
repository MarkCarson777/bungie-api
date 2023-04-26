import axios from "axios";

const membershipType = 254; // Bungie.net membership
const apiKey = "a798d7d065154b7895fb699091e173f4"; // Replace with your actual API key
const membershipId = "4611686018440140266";

export const getBungieNetUser = () => {
  axios
    .get(
      `https://www.bungie.net/platform/User/GetMembershipsById/${membershipId}/${membershipType}/`,
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
