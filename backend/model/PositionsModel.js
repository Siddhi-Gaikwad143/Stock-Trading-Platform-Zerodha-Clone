const mongoose = require('mongoose');
const { PositionsSchema } = require('../schemas/PositionsSchema'); // corrected path

const PositionsModel = mongoose.model('Positions', PositionsSchema);

module.exports = PositionsModel;
