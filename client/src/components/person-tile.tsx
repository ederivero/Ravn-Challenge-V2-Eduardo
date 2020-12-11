import React from 'react';
import styled from 'react-emotion';
import { Link } from '@reach/router';


import { unit } from '../styles';



export default ({ people }: any) => {
  const { id, name, homeworld, species } = people;
  let specie = species.length === 0 ? "Human" : species[0].name


  return (
    <StyledLink
      to={`/people/${id}`}
    >
      <h3>{name}</h3>
      <h5 style={{color:'gray'}} >{specie} for {homeworld.name}</h5>

    </StyledLink>
  );
};

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const padding = unit;
const StyledLink = styled(Link)({
  display: 'block',
  marginTop: padding,
  color:'black',
  paddingBottom:'5px',
  borderBottom:'1px solid gray',
  textDecoration: 'none',
  ':not(:last-child)': {
    marginBottom: padding * 2,
  },
  
});
