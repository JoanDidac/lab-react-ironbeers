import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';



const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        setBeer(response.data);
      } catch (error) {
        console.error('Error fetching random beer:', error);
      }
    };
  
    fetchRandomBeer();
  }, []);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-beer-container"> 
      <Header />
      <img src={beer.image_url} alt={beer.name} />
      <div>
         <h1>{beer.name}</h1>
         <h2>{beer.tagline}</h2>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>
       </div>
      <Link to="/beers" className="back-link">Back to All Beers</Link> 
    </div>
  );
};



export default RandomBeer;
