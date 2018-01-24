 // MONO TEST LVL 1

1.
2. db.monsters.insert({})
3. db.monsters.find()
4. db.monsters.find({"Name": "Kai"})
5. db.monsters.find({"Attacks": "Fire"}, {"multi": true})
6. db.monsters.find({"Stats.Defense": 35})

  //MONGO TEST LVL 3
  {
	"name": "Bat",
	"Level": 4,
	"health": 25,
	"type": "Flying",
	"attacks": ["scratch", "bite"],
	"stats": {
		"attack": 5,
		"defense": 2
	}
	"style": "cool"
}
  
  
  var mongo = function(db) {
        db.monsters.find({"Stats.Attack": {"$lt":10}, {"multi": true}})
        db.monsters.find({"Level": {"$gt": 5}, {"$lt": 15}})
        db.monsters.find({"attacks": {"$ne": "bite"}})
        db.monsters.find({"Level": {"$lt": 6}}, {"Name": true, "Level": true, "health": true})
        db.monsters.find({"Level": {"$lte": 20, "$gte": 10}}, {"health": false, "style": false})
        db.monsters.aggregate({"$group": {"_id": "$monsters", "total": {"$sum": 1}}})
        db.monsters.aggregate({"$group": {"_id": "$level", "highest_level": {"$max": }}})

  //mongo test lvl 4
  
  