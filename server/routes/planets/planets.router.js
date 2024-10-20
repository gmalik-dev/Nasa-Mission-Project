const express = require('express');
const plannetsRouter = express.Router();

const {getAllPlanets} = require('./planets.controller');

plannetsRouter.get('/', getAllPlanets);

module.exports = plannetsRouter;

