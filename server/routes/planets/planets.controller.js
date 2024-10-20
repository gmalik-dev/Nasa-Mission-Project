const {planets} = require('../../models/planets.models');

function getAllPlanets(req, res) {
    res.status(200).json(planets); // Correct use of res.status
}

module.exports = {
    getAllPlanets
};