const citiesCtrol = {};

const City = require('../models/City');

// Get all the cities
citiesCtrol.getCities = async(req, res) => {
    const cities = await City.find();
    res.json(cities)
} 

//Create a city whit weather dates
citiesCtrol.createCity = async (req, res) =>{
    const { nombre, temperatura, presion, humedad, maxima, minima } = req.body;

    const newCity =  new City({
        nombre,
        temperatura,
        presion,
        humedad,
        maxima,
        minima
    });

    await newCity.save()

    res.json({message: 'city saved'});
} 


//Get a one city
citiesCtrol.getCity = async (req, res) => {
    const city = await City.findById(req.params.id)
    res.json(city)
}


//Update a city
citiesCtrol.updateCity = async (req, res) => {

    const { nombre, temperatura, presion, humedad, maxima, minima } = req.body;

    await City.findByIdAndUpdate(req.params.id, {
        nombre,
        temperatura,
        presion,
        humedad,
        maxima,
        minima
    });
    res.json({message: 'City update'})
}


//Delete a city
citiesCtrol.deletetCity = async (req, res) => {
    await City.findByIdAndDelete(req.params.id)
    res.json({message: 'City delete'})
}

module.exports = citiesCtrol;