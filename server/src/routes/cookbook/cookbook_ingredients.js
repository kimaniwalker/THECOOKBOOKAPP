const express = require('express');
const cookbook_ingredients = require('../../config/dbFiles/cookbook_ingredients');



const router = express.Router();

router.get('/', async (req, res, next) => {

    try {
        let results = await cookbook_ingredients.all();
        res.json(results);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

});

router.get('/:id', async (req, res, next) => {

    try {
        let results = await cookbook_ingredients.one(req.params.id);
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
        ingredient: req.body.ingredient,
        cookbookId: req.body.cookbookId,

    }




    try {
        
        
        let results = await cookbook_ingredients.insert(insertObject);
        console.log(results);
        res.status(201).json(results);
        


    } catch (err) {
        res.status(500).send(err);
    }
})

router.put('/', async (req, res, next) => {
    let insertObject = {
        name: req.body.name,
        ingredient: req.body.ingredient,
        cookbookId: req.body.cookbookId,

    }

    console.log(insertObject);

    try {
        let results = await cookbook_ingredients.update(insertObject);
        console.log(results);
        res.status(201).json(results);

    } catch (err) {
        res.status(500).send(err);
    }
})

router.delete('/:id', async (req, res, next) => {

    try {
        let results = await cookbook_ingredients.delete(req.params.id);
        res.json(results);

    } catch (err) {

        console.log(err);
        console.log('test');
        res.sendStatus(500);
    }

});




module.exports = router;