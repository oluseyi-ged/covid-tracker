import { useState, useEffect } from "react"
import { MenuItem, FormControl, Select } from "@material-ui/core"
import "./App.css"

function App() {
  const [countries, setCountries] = useState([])

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

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* loop through all countries and show a dropdown */}

            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}

            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">Option 4</MenuItem> */}
          </Select>
        </FormControl>
        {/* Header */}
        {/* Title + Select dropdown field */}

        {/* InfoBoxes */}
        {/* InfoBoxes */}
        {/* InfoBoxes */}

        {/* Table of countries plus cases */}
        {/* Graph */}

        {/* Map */}
      </div>
    </div>
  )
}

export default App
