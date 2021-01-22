const mysql = require('mysql');
import { config } from '../index';


const pool = mysql.createPool(config.db);

let users = {};

users.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM users`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};

users.one = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM users WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

users.insert = (email,hash, first_name,last_name,profile_picture_link,phone,city,state,customer_id,address,zipcode,subscription_start,subscription_end, subscription_id) => {
    return new Promise((resolve, reject) => {

        pool.query(`INSERT INTO users SET ?`, [email,
            hash,
            first_name,
            last_name,
            profile_picture_link,
            phone,
            city,
            state,
            customer_id,
            address,
            zipcode,
            subscription_start,
            subscription_end,
            subscription_id] ,(err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve ({id: results.insertId});
        })

    })
}

users.update = (id,email,hash,first_name,last_name,profile_picture_link,phone,city,state,customer_id,address,zipcode,subscription_start,subscription_end, subscription_id) => {

    return new Promise((resolve, reject) => {

        pool.query(`UPDATE users SET hash = ?,first_name = ?,last_name = ? ,profile_picture_link = ?, phone = ?, city = ?,state = ?, customer_id = ?, address = ?, zipcode = ?, subscription_start = ?, subscription_end = ? , subscription_id = ?, WHERE id = ? `, [id,email,
            hash,
            first_name,
            last_name,
            profile_picture_link,
            phone,
            city,
            state,
            customer_id,
            address,
            zipcode,
            subscription_start,
            subscription_end,
            subscription_id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

users.delete = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`DELETE FROM users WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}




module.exports = users;

//all one insert update delete