# Exo 2

```js
db.salles.insertMany([ 
   { 
       "_id": 1, 
       "nom": "AJMI Jazz Club", 
       "adresse": { 
           "numero": 4, 
           "voie": "Rue des Escaliers Sainte-Anne", 
           "codePostal": "84000", 
           "ville": "Avignon", 
           "localisation": { 
               "type": "Point", 
               "coordinates": [43.951616, 4.808657] 
           } 
       }, 
       "styles": ["jazz", "soul", "funk", "blues"], 
       "avis": [{ 
               "date": new Date('2019-11-01'), 
               "note": NumberInt(8) 
           }, 
           { 
               "date": new Date('2019-11-30'), 
               "note": NumberInt(9) 
           } 
       ], 
       "capacite": NumberInt(300), 
       "smac": true 
   }, { 
       "_id": 2, 
       "nom": "Paloma", 
       "adresse": { 
           "numero": 250, 
           "voie": "Chemin de l'Aérodrome", 
           "codePostal": "30000", 
           "ville": "Nîmes", 
           "localisation": { 
               "type": "Point", 
               "coordinates": [43.856430, 4.405415] 
           } 
       }, 
       "avis": [{ 
               "date": new Date('2019-07-06'), 
               "note": NumberInt(10) 
           } 
       ], 
       "capacite": NumberInt(4000), 
       "smac": true 
   }, 
    { 
       "_id": 3, 
       "nom": "Sonograf", 
       "adresse": { 
           "voie": "D901", 
           "codePostal": "84250", 
           "ville": "Le Thor", 
           "localisation": { 
               "type": "Point", 
               "coordinates": [43.923005, 5.020077] 
           } 
       }, 
       "capacite": NumberInt(200), 
       "styles": ["blues", "rock"] 
   } 
]) 
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
db.salles.find({"adresse.codePostal": {$regex:"84"},capacite: { $lt: 500 }}, {_id: 0,"adresse.ville": 1})
```

Exercice 8

Affichez l’identifiant pour les salles dont l’identifiant est pair ou le champ avis est absent.

```js
db.salles.find({"adresse.codePostal": {$regex:"84"},capacite: { $lt: 500 }}, {_id: 0,"adresse.ville": 1})
```
