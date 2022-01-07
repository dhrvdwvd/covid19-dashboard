import axios from 'axios';

const url = "https://disease.sh/v3/covid-19/all";
const url1 = "https://disease.sh/v3/covid-19/countries/"

export const fetchData = async (country) => {
  let newUrl = url;
  if(country) newUrl=url1+country;
  try {
    const {data: {cases, recovered, deaths, updated}} = await axios.get(newUrl);
    return {cases, recovered, deaths, updated};
  }catch(error){
    return error;
  }
}

export const fetchCountries = async () => {
  try {
    const {data} = await axios.get(url1);
    console.log(data);
    return data.map(countryData => countryData.country);
  }catch(error){
    return error;
  }
}
