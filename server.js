const express = require("express");
const mongoose= require("mongoose");
const Person = require('./models/person')
require("dotenv").config();
const app = express();



mongoose.connect(process.env.MONGODB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db= mongoose.connection;

db.once("open", () =>{
    console.log("connected to database");
})

app.listen(5000)



//  const sam = new Person ({
//     name: 'samah',
//     age: 24,
//     favoriteFoods:["pizza","tikka masala"]
  
//    })
//    sam.save((function (error, document) {
//            if (error) console.error(error)
//              console.log(document)
//            }))



const arrayOfpersons = [{
    name: 'yacine',
    age: 25,
    favoriteFoods:["tikka masala"]
  
   },{
    name: 'imene',
    age: 27,
    favoriteFoods:["salad"]
  
   },{
    name: 'khaled',
    age: 20,
    favoriteFoods:["burger"]
  
   }]

//    Person.create(arrayOfpersons, (err, data) => {if (err) Person(err);
//     //console.log pour l'afficher sur terminal  , person(data) n'afficher pas sur terminal
//     else{ console.log(data)}
//    })
console.log("afficherrrrrrr");
//    Person.findOne({name:'samah'}).then((doc) =>{ console.log(doc);})

   
//    .catch((err) =>{ console.log(err);})

// Person.findById({_id:"61583cc386b021a7d2cf36bb"}).then((doc) =>{ console.log(doc);}) 
// .catch((err) =>{ console.log(err);})


// Person.findById({_id:"61583cc386b021a7d2cf36bb"}).then((doc) => { 

//     doc.favoriteFoods.push("chocolat")
//     doc.save()
//     console.log(doc);
// }) 

// Person.findOneAndUpdate({name:"samah"},{age:25},{new:true}).then((doc) =>{ console.log(doc);}) 
//  .catch((err) =>{ console.log(err);})


// Person.findByIdAndRemove({_id:"61583c8aa8127ec4fe78a623"}).then((doc) =>{ console.log(doc);}) 
//  .catch((err) =>{ console.log(err);})

//  Person.findById({_id:"61583c8aa8127ec4fe78a623"}).then((doc) =>{ console.log(doc);}) 
//  .catch((err) =>{ console.log(err);})


// Person.remove({name:'samah'}).then((doc) =>{ console.log(doc);}) 
//  .catch((err) =>{ console.log(err);})


// Person.find({name:'samah'}).then((doc) =>{ console.log(doc);}) 
//   .catch((err) =>{ console.log(err);})

//   Person.findOneAndRemove({name:"yacine"}).then((doc) =>{ console.log(doc);}) 
//   .catch((err) =>{ console.log(err);})

  
Person.find({name:'yacine'}).then((doc) =>{ console.log(doc);}) 
  .catch((err) =>{ console.log(err);})
