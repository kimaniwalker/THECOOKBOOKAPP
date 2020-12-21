const express = require('express');
const fileUpload = require('express-fileupload');
const comments = require('../../config/dbFiles/cookbook_comments');
import { join } from 'path';



const router = express.Router();
router.use(fileUpload());

router.get('/', async (req, res, next) => {

    try {
        let results = await comments.all();
        res.json(results);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

});

router.get('/:cookbookId', async (req, res, next) => {

    try {
        let results = await comments.one(req.params.cookbookId);
        res.json(results);

    } catch (err) {

        console.log(err);
        console.log('test');
        res.sendStatus(500);
    }

});



router.post('/', async (req, res, next) => {
    let insertObject = {
        comment: req.body.comment,
        user: req.body.user,
        cookbookId: req.body.cookbookId

    }

    console.log(insertObject);




    try {
        
        
        let results = await comments.insert(insertObject);
        console.log(results);
        res.status(201).json(results);
        


    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
})



router.put('/', async (req, res, next) => {
    let insertObject = {
        comment: req.body.comment,
        user: req.body.user,
        cookbookId: req.body.cookbookId

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

router.delete('/', async (req, res, next) => {

    try {
        let results = await comments.delete(req.params.id);
        res.json(results);

    } catch (err) {

        console.log(err);
        console.log('test');
        res.sendStatus(500);
    }

});




module.exports = router;