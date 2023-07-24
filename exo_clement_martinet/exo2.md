## 1. 
```
db.salles.find({ smac: true }, { _id: 1, nom: 1 })
```

## 2.
```
db.salles.find({ capacite: { $gt: 1000 } }, { nom: 1 })
```

## 3.
```
db.salles.find({ "adresse.numero": { $exists: false } }, { _id: 1 })
```

## 4.
```
db.salles.find({ avis: { $size: 1 } }, { _id: 1, nom: 1 })
```

## 5.
```
db.salles.find({ styles: "blues" }, { styles: 1 })
```

## 6.
```
db.salles.find({ "styles.0": "blues" }, { styles: 1 })
```

## 7.
```
db.salles.find({ "adresse.codePostal": /^84/, capacite: { $lt: 500 } }, { ville: 1 })
```

## 8.
```
db.salles.find({ $or: [{ _id: { $mod: [2, 0] } }, { avis: { $exists: false } }] }, { _id: 1 })
```

## 9.
```
db.salles.find({ "avis.note": { $gte: 8, $lte: 10 } }, { nom: 1 })
```

## 10.
```
db.salles.find({ "avis.date": { $gt: new Date("2019-11-15") } }, { nom: 1 })
```

## 11.
```
db.salles.find({ $expr: { $gt: [{ $multiply: ["$_id", 100] }, "$capacite"] } }, { nom: 1, capacite: 1 })
```

## 12.
```
db.salles.aggregate([{$match: {smac: true,$expr: { $gt: [{ $size: { $ifNull: ["$styles", []] } }, 2] }}},{$project: { _id: 0, nom: 1 }}])
```

## 13.
```
db.salles.distinct("adresse.codePostal")
```

## 14.
```
db.salles.updateMany({}, { $inc: { capacite: 100 } })
```

## 15.
```
db.salles.updateMany({ styles: { $ne: "jazz" } }, { $push: { styles: "jazz" } })
```

## 16.
```
db.salles.updateMany({ _id: { $nin: [2, 3] } }, { $pull: { styles: "funk" } })
```

## 17.
```
db.salles.updateOne({ _id: 3 }, { $push: { styles: { $each: ["techno", "reggae"] } } })
```

## 18.
```
db.salles.updateMany({ nom: { $regex: /^P/i } }, { $inc: { capacite: 150 }, $set: { contact: { nom: "telephone", telephone: "04 11 94 00 10" } } })
```

## 19.
```
db.salles.updateMany({ nom: { $regex: /^[aeiou]/i } }, { $push: { avis: { date: new Date(), note: 10 } } })
```

## 20.
```
db.salles.updateMany({ nom: { $regex: /^[zZ]/ } }, { $set: { nom: "Pub Z", capacite: 50, smac: false } }, { upsert: true })
```

## 21.
```
db.salles.countDocuments({ _id: { $type: "objectId" } })
```

## 22.
```
db.salles.find({ _id: { $type: "objectId" } }).sort({ capacite: -1 }).limit(1)
```
## 23.
```
db.salles.replaceOne({ _id: 3 }, { _id: 3, nom: "Sonograf", capacite: 60 })
```

## 24.
```
db.salles.deleteOne({ _id: { $type: "objectId" }, capacite: { $lte: 60 } })
```

## 25.
```
db.salles.findOneAndUpdate({ nom: { $in: ["Nîmes", "nîmes"] } },{ $inc: { capacite: -15 } })
```
