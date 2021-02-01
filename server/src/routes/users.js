import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import { generateHash } from "../utils/security";
const db = require('../config/dbFiles/users');
const fileUpload = require('express-fileupload');
import { join } from 'path';


let router = Router();
router.use(fileUpload());



router.get('/me', tokenMiddleware, isLoggedIn, async (req, res) => {

  try {
    console.log(req.user);
    res.json(req.user);
  } catch (err) {

    console.log(err);
    res.sendStatus(500);
  }


});


router.get('/', async (req, res) => {
  try {
    db.all()
      .then(users => {
        res.json(users);
      })
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

});

router.get('/:id', async (req, res) => {
  try {

    let foundClass = await db.one(req.params.id);
    res.json(foundClass);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

/**
 * register a user
 * is expecting:
 * { email, password, address_line_one, address_line_two, city, state, zip, bio, first_name, last_name, middle_initial, profile_picture_link, telephone, username }
 * in the request's body
 */
router.post("/", async (req, res) => {


  try {

    let hash = await generateHash(req.body.password);
    let insertObject = {
      email: req.body.email,
      hash,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_picture_link: req.body.profile_picture_link,
      phone: req.body.phone,
      city: req.body.city,
      state: req.body.state,
      customer_id: req.body.customer_id,
      address: req.body.address,
      zipcode: req.body.zipcode,
      subscription_start: req.body.subscription_start,
      subscription_end: req.body.subscription_end,
      subscription_id: req.body.subscription_id

    };

    console.log(insertObject)
    let idObj = await db.insert(insertObject);
    res.status(201).json(idObj);

  } catch (err) {
    console.log('Error' + err);
    if (err.errno === 1062) {
      res.status(500).send("Emails have to be unique!");
    } else res.status(500).send(err);

  }

});

router.put("/", async (req, res) => {


  try {

    let hash = await generateHash(req.body.password);
    let insertObject = {
      email: req.body.email,
      hash,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_picture_link: req.body.profile_picture_link,
      phone: req.body.phone,
      city: req.body.city,
      state: req.body.state,
      customer_id: req.body.customer_id,
      address: req.body.address,
      zipcode: req.body.zipcode,
      subscription_start: req.body.subscription_start,
      subscription_end: req.body.subscription_end,
      subscription_id: req.body.subscription_id

    };

    console.log(insertObject)
    let idObj = await db.update(insertObject);
    res.status(201).json(idObj);

  } catch (err) {
    console.log('Error' + err);
    if (err.errno === 1062) {
      res.status(500).send("Emails have to be unique!");
    } else res.status(500).send(err);

  }

});


router.delete('/', async (req, res, next) => {

  try {
      let results = await db.delete(req.params.id);
      res.json(results);

  } catch (err) {

      console.log(err);
      console.log('test');
      res.sendStatus(500);
  }

});





export default router;