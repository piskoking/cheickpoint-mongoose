// Créer et sauvegarder un enregistrement d'un modèle
const person = new Person({
    name: 'John',
    age: 30,
    favoriteFoods: ['Pizza', 'Burger']
});

person.save(function(err, data) {
    if (err) return console.error(err);
    console.log('Enregistrement créé avec succès :', data);
});

// Créer plusieurs enregistrements avec model.create()
const arrayOfPeople = [
    { name: 'Alice', age: 25, favoriteFoods: ['Pasta', 'Salad'] },
    { name: 'Bob', age: 35, favoriteFoods: ['Sushi', 'Steak'] }
];

Person.create(arrayOfPeople, function(err, people) {
    if (err) return console.error(err);
    console.log('Enregistrements créés avec succès :', people);
});

// Utiliser model.find() pour effectuer une recherche dans votre base de données
Person.find({ name: 'John' }, function(err, people) {
    if (err) return console.error(err);
    console.log('Personnes avec le nom "John" :', people);
});

// Utiliser model.findOne() pour renvoyer un seul document correspondant de votre base de données
Person.findOne({ favoriteFoods: 'Burger' }, function(err, person) {
    if (err) return console.error(err);
    console.log('Personne ayant "Burger" dans ses aliments préférés :', person);
});

// Utiliser model.findById() pour rechercher votre base de données par _id
const personId = '6097e1f32bcab90e18623a18'; // Remplacez par un ID valide
Person.findById(personId, function(err, person) {
    if (err) return console.error(err);
    console.log('Personne avec l\'ID donné :', person);
});

// Effectuer des mises à jour classiques en exécutant Find, Edit, puis Save
const personIdToUpdate = '6097e1f32bcab90e18623a18'; // Remplacez par un ID valide
Person.findById(personIdToUpdate, function(err, person) {
    if (err) return console.error(err);
    person.favoriteFoods.push('Hamburger');
    person.save(function(err, updatedPerson) {
        if (err) return console.error(err);
        console.log('Personne mise à jour avec succès :', updatedPerson);
    });
});

// Effectuer de nouvelles mises à jour sur un document à l'aide de model.findOneAndUpdate()
const personNameToUpdate = 'John';
Person.findOneAndUpdate({ name: personNameToUpdate }, { age: 20 }, { new: true }, function(err, updatedPerson) {
    if (err) return console.error(err);
    console.log('Personne mise à jour avec succès :', updatedPerson);
});

// Supprimer un document en utilisant model.findByIdAndRemove
const personIdToDelete = '6097e1f32bcab90e18623a18'; // Remplacez par un ID valide
Person.findByIdAndRemove(personIdToDelete, function(err, deletedPerson) {
    if (err) return console.error(err);
    console.log('Personne supprimée avec succès :', deletedPerson);
});

// MongoDB et Mongoose - Supprimer de nombreux documents avec model.remove()
Person.remove({ name: 'Mary' }, function(err, result) {
    if (err) return console.error(err);
    console.log('Nombre de personnes supprimées :', result.deletedCount);
});
