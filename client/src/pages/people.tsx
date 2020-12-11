import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Loading, Header, PersonDetail } from '../components';
import { RouteComponentProps } from '@reach/router';
import * as PeopleDetailsTypes from './__generated__/PeopleDetails';

export const VEHICLE_TILE_DATA = gql`
  fragment VehicleTile on Vehicles {
    __typename
    name
  }
`;
export const GET_LAUNCH_DETAILS = gql`
query People($peopleId: ID!){
    people(id:$peopleId){
      id
      name
      eye_color
      hair_color
      skin_color
      birth_year
      vehicles{
        name
      }
    }
  }

`;

interface LaunchProps extends RouteComponentProps {
  peopleId?: any;
}

const Peoples: React.FC<LaunchProps> = ({ peopleId }) => {
  
  const {
    data,
    loading,
    error,
  } = useQuery<
    PeopleDetailsTypes.PeopleDetails,
    PeopleDetailsTypes.PeopleDetailsVariables
  >(GET_LAUNCH_DETAILS,
    { variables: { peopleId } }
  );
  

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Header image={data.people?.name}>
      </Header>
      <PersonDetail {...data.people} />
    </Fragment>
  );
}

export default Peoples;
