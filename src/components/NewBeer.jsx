import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';




const NewBeer = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
     event.preventDefault();
      try {
      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formValues);
      console.log(response);
      if (response.data && response.data._id) {
        console.log('New beer added:', response.data);
        navigate(`/beers/${response.data._id}`);
      }
    } catch (error) {
      console.error('Error creating new beer:', error);
    }
  };
  

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
      <h1 className='form-title'>Create your New Beer</h1>
        <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} required />

        <label htmlFor="tagline">Tagline:</label>
          <input type="text" id="tagline" name="tagline" value={formValues.tagline} onChange={handleChange} required />

        <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formValues.description} onChange={handleChange} required />

        <label htmlFor="first_brewed">First Brewed:</label>
          <input type="text" id="first_brewed" name="first_brewed" value={formValues.first_brewed} onChange={handleChange} required />

        <label htmlFor="brewers_tips">Brewers Tips:</label>
          <textarea id="brewers_tips" name="brewers_tips" value={formValues.brewers_tips} onChange={handleChange} required />

        <label htmlFor="attenuation_level">Attenuation Level:</label>
          <input type="number" id="attenuation_level" name="attenuation_level" value={formValues.attenuation_level} onChange={handleChange} required />

        <label htmlFor="contributed_by">Contributed By:</label>
          <input type="text" id="contributed_by" name="contributed_by" value={formValues.contributed_by} onChange={handleChange} required />

        <button type="submit">Add new beer</button>
      </form>
    </div>
  );
};



export default NewBeer;
