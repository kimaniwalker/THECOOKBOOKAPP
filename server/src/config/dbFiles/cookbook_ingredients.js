const mysql = require('mysql');
import { config } from '../index';


const pool = mysql.createPool(config.db);

let cookbook_ingredients = {};

cookbook_ingredients.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM cookbook_ingredients`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};


cookbook_ingredients.one = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM cookbook_ingredients WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

cookbook_ingredients.insert = ({id,cookbookId,ingredient}) => {


    return new Promise((resolve, reject) => {

        pool.query(`INSERT INTO cookbook_ingredients SET ?`, [id,cookbookId,ingredient ] ,(err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve ({id: results.insertId});
        })

    })
}

cookbook_ingredients.update = ({ cookbookId,ingredient }) => {


    return new Promise((resolve, reject) => {

        pool.query(`UPDATE cookbook_ingredients SET cookbookId = ?,ingredient = ? `, [cookbookId,ingredient], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

cookbook_ingredients.delete = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`DELETE FROM cookbook_ingredients WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}


module.exports = cookbook_ingredients;

//all one insert update delete