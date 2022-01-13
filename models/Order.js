const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    article : String,
    photo : String,
    quantité : String,
    ingrédients : String,
    catégorie : String,
    famille : String,
    description : String,
    ustensiles : String,
    valeur_nutritionnelle : String,
    prix : String,
    rating:{
        type: Number,
        min: 1,
        max: 5,
    },
});

module.exports = mongoose.model("Order", orderSchema)