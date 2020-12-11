import React, { Fragment, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';
import { PersonTile, Header, Button, Loading } from '../components';
import * as GetPeopleListTypes from './__generated__/GetPeopleList';
import styled from 'react-emotion';

export const PERSON_TILE_DATA = gql`
  fragment PeopleTile on People {
    __typename
    id
    name
    homeworld{
      name
    }
    species{
      name
    }
  }
`;
export const GET_PEOPLES = gql`
  query GetPeopleList{
    peoples{
      count
      next
      previous
      results{
        ...PeopleTile
      }
    }
  }
  ${PERSON_TILE_DATA}
`;

interface LaunchesProps extends RouteComponentProps { }

const Persons: React.FC<LaunchesProps> = () => {
  const {
    data,
    loading,
    error,
    fetchMore
  } = useQuery<
  GetPeopleListTypes.GetPeopleList,
  GetPeopleListTypes.GetPeopleListVariables
  >(GET_PEOPLES);
  
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  if (loading) return <Loading />;
  if (error) return (<Fragment><Header/><Error> <p>Failed to load data.</p></Error></Fragment>)
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Header />
      {data.peoples &&
        data.peoples.results &&
        data.peoples.results.map((people: any) => (
          <PersonTile key={people.id} people={people} />
        ))}
      {data.peoples && data.peoples.next && (
        isLoadingMore
          ?  <Loading />
          : <Button disabled
            onClick={async () => {
              setIsLoadingMore(true);
              await fetchMore({
                variables: {
                  page: data.peoples.next,
                },
              });
              setIsLoadingMore(false);
            }}
          >
            Get More
      </Button>
      )}
    </Fragment>
  );
}


export default Persons;
const Error = styled('h3')({
  display:'flex',
  color:'red',
  alignItems:'center',
  justifyContent:'center'
})