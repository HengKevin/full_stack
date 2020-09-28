const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// get task
router.get('/', async (req, res) => {
    const tasks = await loadTasksCollection();
    res.send(await tasks.find({}).toArray());
});

// post task
router.post('/', async (req, res) => {
    const posts = await loadTasksCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// delete task
router.delete('/:id', async(req, res) => {
    const posts = await loadTasksCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
});

async function loadTasksCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://heng_kevin:1234@cluster0.8twdn.mongodb.net/my_tasklist?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true
    });

    return client.db('my_tasklist').collection('mytasks');
}

module.exports = router;