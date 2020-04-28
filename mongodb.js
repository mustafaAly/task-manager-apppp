//crud operation
const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID
const connectioURL =process.env.ConnectionURL
const databaseName = 'task-manager'
const id = new ObjectID()
mongoClient.connect(connectioURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(error.message)
    }
    const db = client.db(databaseName)
    db.collection('users').findOne({ name: 'Ahmed' }, (error, user) => {
        if (error) return console.log('Unable To Get')
        console.log(user)
    })
    db.collection('users').find({ age: 27 }).toArray((erorr, users) => { console.log(users) })
    // db.collection('users').insertOne({
    //     name: 'Ahmed',
    //     age: 27
    // }, (error, result) => {
    //     if (error) return console.log("Unable To Inser")
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany(
    //     [{
    //         description: 'MMMMM',
    //         completed: true
    //     },
    //     {
    //         description: 'TTTTT',
    //         completed: false
    //     },
    //     {
    //         description: 'HHHHH',
    //         completed: false
    //     }],
    //     (error, result) => {
    //         if (error) return console.log("Unable To Insert")
    //         console.log(result.ops)
    //     })
    db.collection('users').updateOne({ _id: new ObjectID("5e7a482e1dd6571f94569d4b") },
        {
            $set: {
                name: 'Mustafa',
                age: 24
            }
        }).then(r => { console.log("Sucsses") }).catch(r => { console.log(r) })
})