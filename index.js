const axios = require("axios");

let resort = "stevens";

const options = {
  method: "GET",
  url: `https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort/${resort}`,
  headers: {
    "X-RapidAPI-Key": "dfd428dbdcmshe06643051b38c0bp1a4bd8jsn59da54a4c468",
    "X-RapidAPI-Host": "ski-resorts-and-conditions.p.rapidapi.com",
  },
};

const getStatistics = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data.data.location); // to get the coordinates
    console.log(response.data.data.lifts);
    console.log("from get stats", response.status);
  } catch (error) {
    console.log("from get stats Error");
  }
};

getStatistics();

// const opts = {
//   method: "GET",
//   url: `https://ski-resort-forecast.p.rapidapi.com/${resort}/forecast?units=i&el=top`,
//   headers: {
//     "X-RapidAPI-Key": "dfd428dbdcmshe06643051b38c0bp1a4bd8jsn59da54a4c468",
//     "X-RapidAPI-Host": "ski-resort-forecast.p.rapidapi.com",
//   },
// };

// const getWeather = async () => {
//   try {
//     const response = await axios.request(options);
//     console.log("from get weather", response.status);
//   } catch (error) {
//     console.log("from get weather Error");
//   }
// };

// getWeather();

// const options = {
//   method: "GET",
//   url: "https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort/?page=1",
//   headers: {
//     "X-RapidAPI-Key": "dfd428dbdcmshe06643051b38c0bp1a4bd8jsn59da54a4c468",
//     "X-RapidAPI-Host": "ski-resorts-and-conditions.p.rapidapi.com",
//   },
// };

// const returnAll = async () => {
//   try {
//     const response = await axios.request(options);
//     const data = response.data;
//     console.log(data);
//     // data.forEach((element, index, array) => {
//     //   console.log(element.slug);
//     // });
//   } catch (error) {
//     console.log("Error");
//   }
// };

// returnAll();
