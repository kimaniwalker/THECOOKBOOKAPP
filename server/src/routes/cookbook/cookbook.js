const express = require('express');
const cookbook = require('../../config/dbFiles/cookbook');



const router = express.Router();

router.get('/', async (req, res, next) => {

    try {
        let results = await cookbook.all();
        res.json(results);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

});

router.get('/:id', async (req, res, next) => {

    try {
        let results = await cookbook.one(req.params.id);
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
        tags: req.body.tags,
        _lastModified: req.body._lastModified,
        images: req.body.images

    }

    console.log(insertObject);




    try {
        
        
        let results = await cookbook.insert(insertObject);
        console.log(results);
        res.status(201).json(results);
        


    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
})

router.put('/', async (req, res, next) => {
    let insertObject = {
        name: req.body.name,
        tags: req.body.tags,
        _lastModified: req.body._lastModified,
        images: req.body.images

    }

    console.log(insertObject);

    try {
        let results = await cookbook.update(insertObject);
        console.log(results);
        res.status(201).json(results);

    } catch (err) {
        res.status(500).send(err);
    }
})

router.delete('/:id', async (req, res, next) => {

    try {
        let results = await cookbook.delete(req.params.id);
        res.json(results);

    } catch (err) {

        console.log(err);
        console.log('test');
        res.sendStatus(500);
    }

});




module.exports = router;