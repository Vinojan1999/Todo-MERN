
const Task = require('../models/todo.model')

exports.getTodo = async (req, res) => {
    const todo = await Task.find();

    res.json(todo);
}

exports.addTodo = (req,res) => {
    console.log(req.body)
  
    const task = new Task({
        text : req.body.text,
        complete : req.body?.complete,
        timestamp : req.body.timestamp
    })
    // This save method is insert this object into the collection in DB
    
    task.save((err, doc) => {
        if(err){
             console.log(err)
            return res.sendStatus(404).json(err)
        }
        console.log(doc)
        return res.json(doc)
    })
}

exports.deleteTodo = async (req, res) => {
    const result = await Task.findByIdAndDelete(req.params.id);

    res.json(result);
}

exports.putTodo = async (req, res) => {
    const todo = await Task.findById(req.params.id);

    todo.complete = !todo.complete;

    todo.save((err, doc) => {
        if(err){
             console.log(err)
            return res.sendStatus(404).json(err)
        }
        console.log(doc)
        return res.json(doc)
    })
}