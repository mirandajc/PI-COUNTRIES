const axios = require('axios')
const { Country , Activity} = require('../../db')
// const {Op} = require('sequelize')
const { Sequelize } = require('sequelize');

const countries = async function() {
    const api = await axios('https://restcountries.com/v3/all')
    const apiData = api.data?.map( async element => {
        await Country.findOrCreate({
            where:{
                id: element.cca3,
                name: element.name['official'],
                flags: element.flags[0],
                continents: element.continents[0],
                capital: element.capital !== undefined ? element.capital[0] : 'No esta definido Capital',
                subregion: element.subregion !== undefined ? element.subregion : 'No esta definido Subregion',
                area: element.area,
                population: element.population
            },
            row: false
        })
        Promise.all(apiData)
        return apiData
    })
    
}

const getCountriesApi = async function() {
    //const countriesData = await countries()
    const getCountries = await Country.findAll({
        attributes: ['id', 'name', 'flags' ]
    })
    return getCountries
}


const getDetailCountries = async function(id) {
   // const countriesData = await countries()
     const iD = id.toUpperCase()
     const detailCountrie = await Country.findOne({
         where:{
             id: iD
         },
         include: {
                model: Activity,
                attributes: ["name", "difficulty", "duration", "season"],
                through: {
                    attributes: [],
                }
            },
     });
    
    return detailCountrie
}

const searchCountriesByName = async function(name) {
    
        const countrie = await Country.findAll({
            where: 
                { name: Sequelize.where( Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + name + '%')
                },
            
            raw: true
        })
       
        Promise.all(countrie)
        if(countrie.length > 0){
            return countrie
        } return 'No se encontro el pais'

}

module.exports = {
    getCountriesApi,
    getDetailCountries,
    searchCountriesByName,
    countries
}