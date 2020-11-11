const express = require('express');
const cookbook_directions = require('../../config/dbFiles/cookbook_directions');



const router = express.Router();

router.get('/', async (req, res, next) => {

    try {
        let results = await cookbook_directions.all();
        res.json(results);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

});

router.get('/:id', async (req, res, next) => {

    try {
        let results = await cookbook_directions.one(req.params.id);
        res.json(results);

    } catch (err) {

        console.log(err);
        console.log('test');
        res.sendStatus(500);
    }

});

router.post('/', async (req, res, next) => {
    let insertObject = {
        name: req.body.name,
        description: req.body.description,
        cookbookId: req.body.cookbookId,

    }




    try {
        
        
        let results = await cookbook_directions.insert(insertObject);
        console.log(results);
        res.status(201).json(results);
        


    } catch (err) {
        res.status(500).send(err);
    }
})

router.put('/', async (req, res, next) => {
    let insertObject = {
        name: req.body.name,
        description: req.body.description,
        cookbookId: req.body.cookbookId,

    }

    console.log(insertObject);

    try {
        let results = await cookbook_directions.update(insertObject);
        console.log(results);
        res.status(201).json(results);

    } catch (err) {
        res.status(500).send(err);
    }
})

router.delete('/:id', async (req, res, next) => {

    try {
        let results = await cookbook_directions.delete(req.params.id);
        res.json(results);

    } catch (err) {

        console.log(err);
        console.log('test');
        res.sendStatus(500);
    }

});




module.exports = router;