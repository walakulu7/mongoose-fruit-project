const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true });


const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const FruitModel = mongoose.model("Fruit", fruitSchema);

const fruit = new FruitModel({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Jhon",
    age: 37
});

// person.save();

// const kiwi = new FruitModel({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit!."
// });

// const orange = new FruitModel({
//     name: "Orange",
//     score: 4,
//     review: "Too sour for me."
// });

// const banana = new FruitModel({
//     name: "Banana",
//     score: 3,
//     review: "Weird texture"
// }); 

// FruitModel.insertMany([kiwi, orange, banana]);

FruitModel.find({})
  .then(fruits => {
    // console.log(fruits);

    fruits.forEach(function(fruit) {
        console.log(fruit.name);
    })
    
  })
  .catch(err => {
    console.log(err);
  });




app.listen(3000, function(){
    console.log("Server is running on port :3000");
});