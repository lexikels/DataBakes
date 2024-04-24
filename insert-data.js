const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const uri =
  "mongodb+srv://lexikelsall:Lj9iNv6mT9TOeQWW@cluster0.qs8hrwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the Atlas cluster
    await client.connect();

    // Get the database and collection on which to run the operation
    const db = client.db("DataBakes");
    const col = db.collection("RecipeSites");

    // Create new documents
    const recipeDocuments = [
      {
        name: "Eggplant tomato pasta sauce",
        description: "Favourite bolognese sauce (add mince)",
        catagory: "Dinner",
        url: "https://www.smh.com.au/goodfood/recipes/eggplant-tomato-pasta-sauce-20150928-43jlr.html",
      },
      {
        name: "Levain Bakery Cookies",
        description: "The best chocolate chip cookies",
        catagory: "Baking",
        url: "https://www.modernhoney.com/levain-bakery-two-chip-chocolate-chip-cookies/",
      },
    ];

    // Insert the documents into the specified collection
    const p = await col.insertMany(recipeDocuments);

    // Find the document
    const filter = { name: "Eggplant tomato pasta sauce" };
    const document = await col.findOne(filter);

    // Print results
    console.log("Document found:\n" + JSON.stringify(document));
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
