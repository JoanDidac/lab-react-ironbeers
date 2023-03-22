import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import spinner from '../assets/beer-pour.gif'; 

const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const fetchBeers = async () => {
      setLoading(true); // Set loading to true
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(response.data);
        setFilteredBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      } finally {
        setLoading(false); // Set loading to false when finished
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
      <input type="text" className="beer-search" placeholder="Search for a beer" onChange={handleSearch} />
      {loading ? (
        
        <img id='beer-gif' src={spinner} alt="Loading..." /> // Render the gif if loading is true
        
      ) : (
        <div className="beer-list">
          {filteredBeers.map((beer) => (
            <div key={beer._id} className="beer-item">
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
      )}
    </div>
  );
};

export default AllBeers;
