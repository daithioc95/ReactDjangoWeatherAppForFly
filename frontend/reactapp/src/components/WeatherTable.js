import React from 'react';
import SearchBar from './SearchBar';
import LocationCard from './LocationCard';
import { useState } from 'react';

// Callbacks

const WeatherTable = () => {
const [locations, setLocations] = useState([{"name":"Paris", "id": 2988507}, 
                    {"name":"New York", "id": 5128581}, 
                    {"name":"London", "id": 2643743},
                    {"name":"Sydney", "id": 2147714}])

const deleteLocation = (id) => {
  setLocations(locations.filter((location) => location.id !== id))
}

      return (
          <div>
            <SearchBar />
            {locations.map(location =>(
            <LocationCard key = {location.id} location = {location.name} 
              onDelete = {deleteLocation} />
            ))}
          </div>
      );
    
  }
export default WeatherTable