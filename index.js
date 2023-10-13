import axios from "axios";
import { resorts } from "./data.js";

const getStatistics = async (resort) => {
  const options = {
    method: "GET",
    url: `https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort/${resort}`,
    headers: {
      "X-RapidAPI-Key": "API KEY",
      "X-RapidAPI-Host": "ski-resorts-and-conditions.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    // console.log(response.data.data.location); // to get the coordinates
    console.log(
      response.data.data.name +
        " - " +
        response.data.data.country +
        ", " +
        response.data.data.region
    ); // to get the resort name;
  } catch (error) {
    console.log("from get stats Error");
  }
};

getStatistics("sansicario");

// const resortsCopy = [...resorts];
//
//
//
// resortsCopy.forEach((resort, i) => {
//    getStatistics(resort.slug)
// });

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
