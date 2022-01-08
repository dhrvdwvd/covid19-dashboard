import {useEffect, useState} from 'react';
import {Typography, NativeSelect } from '@mui/material';
import {fetchCountries} from '../service/api.js';

const Countries = ({handleCountryChange}) => {

  const [countries, setCountries] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    }
    fetchAPI();
  }, [])

  return(
    <>
      <Typography style={{margin: '0.5rem 2rem'}} fontSize={'1.5rem'} color={'textSecondary'}>
        Above figures by country or region
      </Typography>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Worldwide</option>
        {countries.map((country, i) => {
          return (
          <option key={i} value={country}>{country}</option>
          )
        })}
      </NativeSelect>
    </>
  )
}

export default Countries