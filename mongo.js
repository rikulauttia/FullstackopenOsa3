const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@fullstackopenosa3.ntpiu.mongodb.net/?
retryWrites=true&w=majority&appName=FullstackopenOsa3`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Matti Meikäläinen",
  number: "04073773729",
});

person.save().then((result) => {
  console.log("person saved!");
  mongoose.connection.close();
});
