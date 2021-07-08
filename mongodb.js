var {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
 
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   db.close();
// });

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  async function run() {
    try {
      await client.connect();
      const database = client.db('local');
      const collection = database.collection('node_demo');
      // Query for a movie that has the title 'Back to the Future'
      const query = { label:"定量" };
      const movie = await collection.findOne({});
        // Get the documents collection
        // Insert some documents
        // collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function(err, result) {
        //   console.log('Inserted 3 documents into the collection');
        // });
        collection.find({c:'iasdasj'}).toArray((err,docs) => {
          console.log('docs',docs);
          
        })
        collection.deleteOne({ a: 1 })
    //   console.log('movie',movies);
    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }
  }
  run().catch(console.dir);