export interface GetPeopleList_peoples_peoples_homeworld {
  __typename: "Planet";
  name: string | null;
}

export interface GetPeopleList_peoples_peoples_species {
  __typename: "Species";
  name: string | null;
}

export interface GetPeopleList_peoples_peoples {
  __typename: "People";
  id: number;
  name: string;
  homeworld: GetPeopleList_peoples_peoples_homeworld | null;
  species: GetPeopleList_peoples_peoples_species | null;
}

export interface GetPeopleList_peoples {
  __typename: "PeopleConnection";
  count: number;
  next: string;
  previous: string;
  results: (GetPeopleList_peoples_peoples | null)[];
}

export interface GetPeopleList {
  peoples: GetPeopleList_peoples;
}

export interface GetPeopleListVariables {
  page?: string | null;
}
