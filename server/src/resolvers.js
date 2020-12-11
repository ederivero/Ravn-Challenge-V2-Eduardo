module.exports= {
    Query:{
        peoples: async(_, {page=1}, {dataSources})=>{
            return await dataSources.personAPI.getAllPeople({page});
        },
        people: (_,{id}, {dataSources})=> dataSources.personAPI.getPeopleById({peopleId: id})
    }
}