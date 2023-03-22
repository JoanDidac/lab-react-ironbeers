import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';



const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(response.data);
        setFilteredBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };
    fetchBeers();
  }, []);

  const handleSearch = async (event) => {
    const query = event.target.value;
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
    setFilteredBeers(response.data);
  };

  return (
    <div>
      <Header />
      <input type="text" className="beer-search" placeholder="Search for a beer" onChange={handleSearch} /> {/* Add class here */}
      <div className="beer-list"> {/* Add class here */}
        {filteredBeers.map((beer) => (
           <div key={beer._id} className="beer-item"> {/* Add class here */}
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} />
               <div>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>Created by: {beer.contributed_by}</p>
               </div>
            </Link>
           </div>
        ))}
      </div>
    </div>
  );
};

export default AllBeers;
