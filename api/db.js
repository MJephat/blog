import mysql from "mysql"

// export const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'blog'
// })


export const db = mysql.createConnection({
    host: 'database-1.cdeno9ums7h8.us-east-1.rds.amazonaws.com',
    // host: '144.76.236.210',
    user: 'admin',
    password: 'aksa5zsfwzTUG4faCYpD',
    database: 'jephy_blog'
});





// db.connect(function(err){
//     if (err) throw err;
//     console.log('connection established');
// });