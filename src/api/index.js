import axios from "axios";
import cars from "../mock/data";

export const searchWord = async (keyword) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  const { data } = await axios.get(url);
  console.log(JSON.stringify(data[0]));
  return data[0];
};

export const searchCar = async (keyword) => {
  return cars.filter((car) => car.name === keyword);
};

// Add your others API calls here
