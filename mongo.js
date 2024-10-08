const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
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
