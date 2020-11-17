const mysql = require('mysql');
import { config } from '../index';


const pool = mysql.createPool(config.db);

let cookbook_directions = {};

cookbook_directions.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM cookbook_directions`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};


cookbook_directions.one = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM cookbook_directions WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

cookbook_directions.insert = (cookbookId,description) => {


    return new Promise((resolve, reject) => {

        pool.query(`INSERT INTO cookbook_directions SET ?`, [cookbookId,description ] ,(err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve ({id: results.insertId});
        })

    })
}

cookbook_directions.update = ( cookbookId,description ) => {


    return new Promise((resolve, reject) => {

        pool.query(`UPDATE cookbook_directions SET cookbookId = ?,description = ? `, [cookbookId,description], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

cookbook_directions.delete = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`DELETE FROM cookbook_directions WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}


module.exports = cookbook_directions;

//all one insert update delete