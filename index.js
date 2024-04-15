// Fichier: index.js (ou un fichier de routes dédié)
const express = require('express');
const app = express()

require('dotenv').config({path: "./config/.env"});
require('./config/db.js')

const port =5000
app.listen(port, ()=>{console.log(`Server is running on ${port}`)})


// const Person = require('./models/personne'); // Importer le modèle Person


// // Créer et sauvegarder un enregistrement d'un modèle
// const person = new Person({
//     name: 'John',
//     age: 30,
//     favoriteFoods: ['Pizza', 'Burger']
// });

// person.save(function(err, data) {
//     if (err) return console.error(err);
//     console.log('Enregistrement créé avec succès :', data);
// });

// // Créer plusieurs enregistrements avec model.create()
// const arrayOfPeople = [
//     { name: 'Alice', age: 25, favoriteFoods: ['Pasta', 'Salad'] },
//     { name: 'Bob', age: 35, favoriteFoods: ['Sushi', 'Steak'] }
// ];

// Person.create(arrayOfPeople, function(err, people) {
//     if (err) return console.error(err);
//     console.log('Enregistrements créés avec succès :', people);
// });

// Autres opérations CRUD sur le modèle Person
// ...

// Démarrer le serveur
// ...
