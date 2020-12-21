const mysql = require('mysql');
import { config } from '../index';


const pool = mysql.createPool(config.db);

let comments = {};

comments.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM cookbook_comments`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};



comments.one = (cookbookId) => {


    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM cookbook_comments WHERE cookbookId = ?`, [cookbookId], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })
}

comments.insert = (cookbookId , user, comment) => {


    return new Promise((resolve, reject) => {

        pool.query(`INSERT INTO cookbook_comments SET ?`, [cookbookId , user, comment] ,(err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve ({id: results.insertId});
        })

    })
}

comments.update = ({cookbookId ,user , comment }) => {


    return new Promise((resolve, reject) => {

        pool.query(`UPDATE cookbook SET cookbookId = ?,user = ?,comment = ? WHERE cookbookId = ? `, [cookbookId ,user , comment], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

comments.delete = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`DELETE FROM cookbook_comments WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}




module.exports = comments;

//all one insert update delete