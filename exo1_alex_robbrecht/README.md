# Exo1

``` js
db.employees.insertMany([
    {
   name: "John Doe",
   age: 35,
   job: "Manager",
   salary: 80000
},
{
   name: "Jane Doe",
   age: 32,
   job: "Developer",
   salary: 75000
},
{
   name: "Jim Smith",
   age: 40,
   job: "Manager",
   salary: 85000
}
])

```

## Questions:

Écrivez une requête MongoDB pour trouver tous les documents dans la collection "employees".

``` js
db.employees.find().pretty()
``` 

Écrivez une requête pour trouver tous les documents où l'âge est supérieur à 33.

``` js
db.employees.find({age: {$gt: 33}})
``` 

Écrivez une requête pour trier les documents dans la collection "employees" par salaire décroissant.

``` js
db.employees.find().sort({salary: -1})
``` 

Écrivez une requête pour sélectionner uniquement le nom et le job de chaque document.

``` js
db.employees.find({}, {name: true,job: true})
``` 

Écrivez une requête pour compter le nombre d'employés par poste.

``` js
db.employees.aggregate([{$unwind: "$job"}, {$sortByCount: "$job"}])
``` 


Écrivez une requête pour mettre à jour le salaire de tous les développeurs à 80000.

``` js
db.employees.updateMany({job: "Developer"}, { $set: {salary: 80000} })
``` 