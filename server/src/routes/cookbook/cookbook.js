const express = require('express');
const fileUpload = require('express-fileupload');
const cookbook = require('../../config/dbFiles/cookbook');
import { join } from 'path';



const router = express.Router();
router.use(fileUpload());

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

router.get('/search/:query', async (req, res, next) => {

    try {
        let results = await cookbook.tags(req.params.query);
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
        images: req.body.images,
        tags: req.body.tags,
        serving_size: req.body.serving_size,
        calories: req.body.calories,
        skill_level: req.body.skill_level,
        featured: req.body.featured,
        approved: req.body.approved,
        description: req.body.description,
        user: req.body.user

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

router.post('/image', async (req, res, next) => {
    


    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    
    let insertObject = req.files.image

    const ASSETS_PATH = join(__dirname, `../../../../client/images/assets/${req.files.image.name}`);

    console.log(insertObject);
    console.log(ASSETS_PATH);


    

    insertObject.mv(ASSETS_PATH, function(err) {
        if (err)
          return res.status(500).send(err);
    
        res.send('File uploaded!');
      });
})

router.put('/', async (req, res, next) => {
    let insertObject = {
        id: req.body.id,
        name: req.body.name,
        images: req.body.images,
        tags: req.body.tags,
        serving_size: req.body.serving_size,
        calories: req.body.calories,
        skill_level: req.body.skill_level,
        featured: req.body.featured,
        approved: req.body.approved,
        description: req.body.description,
        user: req.body.user,
        _lastModified: Date.now()

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