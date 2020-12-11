import React from 'react';
import styled from 'react-emotion';
import { unit } from '../styles';


interface HeaderProps {
  image?: string | any;
  children?: any;
}

const Header: React.FC<HeaderProps> = ({ children = 'People of Star Wars', image }) => {

  return (
    <Container>
  <Title>{image ? image : children}</Title>
      
    </Container>
  );
}

export default Header;

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('div')({
  display: 'flex',
  justifyContent:'center',
  backgroundColor:'black',
  color:'white',
  marginBottom: unit * 4.5,
});
const Title = styled('h3')({
  padding:unit*4
})