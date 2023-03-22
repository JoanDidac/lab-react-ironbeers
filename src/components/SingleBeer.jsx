import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
// import Footer from './Footer';

const SingleBeer = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        setBeer(response.data);
      } catch (error) {
        console.error('Error fetching single beer:', error);
      }
    };
  
    fetchBeer();
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="single-beer-container"> 
        <Header />
        <img src={beer.image_url} alt={beer.name} />
        <div>
          <h1>{beer.name}</h1>
          <h2>{beer.tagline}</h2>
           <p>First brewed: {beer.first_brewed} </p>
           <p>Attenuation level: {beer.attenuation_level} </p>
           <p>{beer.description} </p>
           <p>Created by: {beer.contributed_by} </p>
          </div>
        <Link to="/beers" className="back-link">Back to All Beers</Link>
      </div>
    
    </>
  );
};


export default SingleBeer;
