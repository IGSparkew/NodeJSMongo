## 1. Écrivez une requête MongoDB pour trouver tous les documents dans la collection "employees".

```
db.employees.find({})
```

## 2. Écrivez une requête pour trouver tous les documents où l''âge est supérieur à 33.

```
db.employees.find({ age: { $gt: 33 } })
```

## 3. Écrivez une requête pour trier les documents dans la collection "employees" par salaire décroissant.

```
db.employees.find({}).sort({ salary: -1 })
```

## 4. Écrivez une requête pour sélectionner uniquement le nom et le job de chaque document.

```
db.employees.find({}, { name: 1, job: 1, _id: 0 })
```

## 5. Écrivez une requête pour compter le nombre d''employés par poste.

```
db.employees.aggregate([
  { $group: { _id: "$job", count: { $sum: 1 } } }
])
```

## 6. Écrivez une requête pour mettre à jour le salaire de tous les développeurs à 80000.

```
db.employees.updateMany({ job: "Developer" }, { $set: { salary: 80000 } })
```
