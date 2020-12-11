const {gql} = require('apollo-server');

const typeDefs = gql`
type People {
    id: ID!
    name: String
    eye_color: String
    hair_color: String
    skin_color: String
    birth_year: String
    species: [Species]
    homeworld: Planet
    vehicles: [Vehicles]
    
}
type Species {
    id: ID!
    name: String
}
type Planet {
    id: ID!
    name: String
}
type Vehicles {
    id: ID!
    name: String
}
type Query {
    peoples(page: Int): PeopleConnection,
    people(id: ID!): People
}
type PeopleConnection {
    count: Int
    next: String!
    previous: String
    results: [People]

}

`;

module.exports = typeDefs;
