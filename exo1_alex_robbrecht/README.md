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


# Exo 2

```js

```

## Question

Exercice 1

Affichez l’identifiant et le nom des salles qui sont des SMAC.

```js
db.salles.find({smac : {$eq: true}},{_id:true,nom:true})
```

Exercice 2

Affichez le nom des salles qui possèdent une capacité d’accueil strictement supérieure à 1000 places.

```js
db.salles.find({capacite:{$gt: 1000}},{nom: true})
```

Exercice 3

Affichez l’identifiant des salles pour lesquelles le champ adresse ne comporte pas de numéro.

```js
db.salles.find({"adresse.numero": {$exists: 0}},{_id:true})
```

Exercice 4

Affichez l’identifiant puis le nom des salles qui ont exactement un avis.

```js
db.salles.find({avis: {$size: 1}},{_id:true})
```

Exercice 5

Affichez tous les styles musicaux des salles qui programment notamment du blues.

```js
db.salles.find({styles: {$in: ["blues"]}},{_id:false,styles:true})
```

Exercice 6

Affichez tous les styles musicaux des salles qui ont le style « blues » en première position dans leur tableau styles.

```js
db.salles.find({"styles.0":"blues"},{styles:true})
```

Exercice 7

Affichez la ville des salles dont le code postal commence par 84 et qui ont une capacité strictement inférieure à 500 places (pensez à utiliser une expression régulière).

```js

```

Exercice 8

Affichez l’identifiant pour les salles dont l’identifiant est pair ou le champ avis est absent.

```js

```
