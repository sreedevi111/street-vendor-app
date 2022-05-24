export const GET_SHOPS = "GET_SHOPS";

const API_URL = "https://mocki.io/v1/31364e03-5fe7-4582-a1b4-19e8f2e4570a";
export const GetShops = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/Json",
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_SHOPS,
          payload: json,
        });
      } else {
        console.log("Unable to fatch!");
      }
    };
  } catch (error) {
    console.log(error);
  }
};
