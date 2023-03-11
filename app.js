const { text } = require("body-parser");
const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true });


const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data enry, no names specify!" ]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const FruitModel = mongoose.model("Fruit", fruitSchema);

const fruit = new FruitModel({
    rating: 8,
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




// How to INSERT Documents---------------------
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


// How to FIND Documents---------------------
FruitModel.find({})
  .then(fruits => {
    // console.log(fruits);
    mongoose.connection.close();
    fruits.forEach(function(fruit) {
        console.log(fruit);
    })
    
  })
  .catch(err => {
    console.log(err);
  });


  // FruitModel.find({})
  // .then((fruits) => {
  //   if (fruits.length > 0) {
  //     fruits.forEach((fruit) => {
  //       console.log(fruit.name);
  //     });
  //   } else {
  //     console.log('No fruits found');
  //   }
  //   mongoose.connection.close();
  // })
  // .catch((err) => {
  //   console.error('Error while querying fruits', err);
  //   mongoose.connection.close(() => {
  //     console.log('Database connection closed due to error');
  //   });
  // });


// How to UPDATE Documents---------------
//  FruitModel.updateMany({_id: "640779de436ea3ec9aa1ad89"}, {name: "Peach"});


// FruitModel.find({_id: "640779de436ea3ec9aa1ad89"})
//   .then((fruits) => {
//     if (fruits.length > 0) {
//       fruits.forEach((fruit) => {
//         console.log(fruit.name);
//       });
//       FruitModel.updateMany({_id: "640779de436ea3ec9aa1ad89"}, {name: "Peach"})
//         .then(() => {
//           console.log('Fruit updated successfully');
//           mongoose.connection.close();
//         })
//         .catch((err) => {
//           console.error('Error while updating fruit', err);
//           mongoose.connection.close(() => {
//             console.log('Database connection closed due to error');
//           });
//         });
//     } else {
//       console.log('No fruits found');
//       mongoose.connection.close();
//     }
//   })
//   .catch((err) => {
//     console.error('Error while querying fruits', err);
//     mongoose.connection.close(() => {
//       console.log('Database connection closed due to error');
//     });
//   });


// How to delete documents-----------
// FruitModel.deleteOne({_id: "640779de436ea3ec9aa1ad89"})
// .then(() => {
//     console.log("Successfully Deleted.");
// })
// .catch((err) => {
//     console.log(err);
// })
// ;




app.listen(3000, function(){
    console.log("Server is running on port :3000");
});