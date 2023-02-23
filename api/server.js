const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express());
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/todo-mern",options)
  .then((res) => console.log("Connected to MondoDB.."))
  .catch((err) => console.log(err));

const todoRouter = require('./src/routes/todo.routes');
app.use('/api/tasks', todoRouter)
app.listen(3001, () => console.log("Server started on PORT 3001"));