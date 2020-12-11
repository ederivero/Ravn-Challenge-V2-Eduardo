const { RESTDataSource } = require('apollo-datasource-rest');


class PeopleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://swapi.dev/api/';
    }
    async getAllPeople({page}) {
        const response = await this.get('people/?page='+page);
        let results = Array.isArray(response.results) ? response.results.map(person => this.personReducer(person)) : [];
        // after all people return and concatenate in variable results, it's time to search his races and his vehicles to how 
        for (const keyMain in results) {
            // use the url but only the endpoint to get the homeworld - race for this person
            let homeworldURL = results[keyMain].homeworld.split(this.baseURL)[1];
            results[keyMain].homeworld = await this.get(homeworldURL);
            // now it's time for the species
            for (const keySpecies in results[keyMain].species) {
                let speciesURL = results[keyMain].species[keySpecies].split(this.baseURL)[1];
                results[keyMain].species[keySpecies] = await this.get(speciesURL);
            }
        }
        response.results=results;
        return response;
    }    
    async getPeopleById({peopleId}){
        const response = await this.get('people/'+peopleId)
        // and for the vehicles
        for (const keyVehicles in response.vehicles) {
            let vehiclesURL = response.vehicles[keyVehicles].split(this.baseURL)[1];
            response.vehicles[keyVehicles] = await this.get(vehiclesURL);
        }
        return this.personReducer(response);
    }
    personReducer(person){
        let idPerson = person.url.split('/')[5];
        return {
            id: idPerson,
            name: person.name,
            hair_color: person.hair_color,
            eye_color : person.eye_color,
            skin_color: person.skin_color,
            birth_year: person.birth_year,
            homeworld : person.homeworld,
            species: person.species,
            vehicles: person.vehicles
        }
    }
}

module.exports = PeopleAPI;