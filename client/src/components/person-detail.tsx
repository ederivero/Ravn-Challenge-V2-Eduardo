import React from 'react';
import styled from 'react-emotion';


const LaunchDetail: React.FC<any> = ({ id, eye_color, hair_color, skin_color, birth_year, vehicles }: any) => (
  <Card
  >
    <h2 style={{paddingBottom:'50px'}}>General Information</h2>
    <div>
      <Row>
        <Title >
          Eye color
        </Title>
        
        <Desc >{eye_color}</Desc>
        </Row>
        <Row>
        <Title>
          Hair color
        </Title>
        <Desc>{hair_color}</Desc>
        </Row>
        <Row>
        <Title>
          Skin color
        </Title>
        <Desc>{skin_color}</Desc>
        </Row>
        <Row>
        <Title>
          Birth Year
        </Title>
        <Desc>{birth_year}</Desc>
        </Row>
        <Desc style={{paddingTop:'50px'}}>Vehicles</Desc>
        {vehicles.map((vehicle:any,idvehicle:any)=>(<Vehicle key={idvehicle}>{vehicle.name}</Vehicle>))}
      
    </div>

  </Card>
);

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Card = styled('div')({

});
const Row = styled('div')({
  display:'flex',
  justifyContent:'space-between',
  marginBottom: '20px'
});
const Title = styled('h3')({
  color:'gray'
})
const Desc = styled('h3')({
  color:'black'
})
const Vehicle= styled('h3')({
  color:'gray',
  margin:'10px 0'
})
export default LaunchDetail;
