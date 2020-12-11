# Welcome to Server Side!

This side is how return the data to be poblated on the front, You can see a `src/` folder that contains all the funcionality. In the `index.js` we have the instance of our [ApolloServer](https://www.apollographql.com/) class for use GraphQL. The resolver are the `controllers` to get and send data, for this case we have only 2:
- peoples
- people

In peoples resolver we need the number of page or the default value was 1 and in the people we need his ID to return the specif people with his vehicles. All the logic for this resolvers it's in the folder `datasources/people` with two methods and one reducer:
- getAllPeople
- getPeopleById
- personReducer

And the way to get and return data was declared in `schema.js` with the typedefs and that's it. This is the way to our server side works!