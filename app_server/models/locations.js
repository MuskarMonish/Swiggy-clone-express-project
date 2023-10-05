const mongoose = require( 'mongoose' );


   const locationSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    description: String,
    rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
    },
    menu: [{
      name: String,
      money: Number,
      ingredients: String,
    }],
    
   });
mongoose.model('Locations', locationSchema);