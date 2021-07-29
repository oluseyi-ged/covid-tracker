import { useState, useEffect } from "react"
import { MenuItem, FormControl, Select } from "@material-ui/core"
import "./App.css"
import InfoBox from "./InfoBox"
import Map from "./Map"

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("worldwide")

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }))

          setCountries(countries)
        })
    }
    getCountriesData()
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value
    setCountry(countryCode)
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            {/* loop through all countries and show a dropdown */}
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Covid Cases" cases="100k" total="500m" />
        <InfoBox title="Recovered" cases="140k" total="250m" />
        <InfoBox title="Death" cases="15k" total="10m" />
      </div>
      {/* Table of countries plus cases */}
      {/* Graph */}

      <Map />
    </div>
  )
}

export default App
