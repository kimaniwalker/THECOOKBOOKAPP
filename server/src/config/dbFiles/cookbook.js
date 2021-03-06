const mysql = require('mysql');
import { config } from '../index';


const pool = mysql.createPool(config.db);

let cookbook = {};

cookbook.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM cookbook`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};

cookbook.tags = (query) => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM cookbook where tags like '%${query}%' order by id desc `, [query] , (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};


cookbook.one = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM cookbook WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

cookbook.insert = (name , images, tags, serving_size, calories,skill_level, featured, description, user) => {


    return new Promise((resolve, reject) => {

        pool.query(`INSERT INTO cookbook SET ?`, [name , images, tags, serving_size, calories,skill_level, featured, description, user] ,(err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve ({id: results.insertId});
        })

    })
}

cookbook.update = ({name,tags,_lastModified,images, description, user, skill_level, featured, approved, calories, id }) => {


    return new Promise((resolve, reject) => {

        pool.query(`UPDATE cookbook SET name = ?,tags = ?,_lastModified = ? ,images = ? , description = ?, user = ?, skill_level = ?, featured = ?, approved = ?, calories = ? WHERE id = ? `, [name,tags,_lastModified,images, description, user, skill_level, featured, approved, calories, id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

cookbook.delete = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`DELETE FROM cookbook WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}




module.exports = cookbook;

//all one insert update delete