/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PeopleDetails
// ====================================================

export interface PeopleDetails_people_vehicle {
    __typename: "Vehicles";
    name: string | null;
  }
  
  export interface PeopleDetails_people {
    __typename: "People";
    id: string;
    name: String;
    eye_color: String;
    hair_color: String;
    skin_color: String;
    birth_year: String;
    vehicles: PeopleDetails_people_vehicle | null;
  }
  
  export interface PeopleDetails {
    people: PeopleDetails_people | null;
  }
  
  export interface PeopleDetailsVariables {
    peopleId: string;
  }
  