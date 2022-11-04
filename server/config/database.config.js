import { Pool } from "pg";
const pool = new Pool();

//!only works if you have all of the following env variable
//PGUSER= \
//PGHOST= \
//PGPASSWORD= \
//PGDATABASE= \
//PGPORT= \
//node

pool.connect((err, connection, release) => {
    if (err) {
        return console.error("Something went wrong connecting to the client 🤷‍♂️", err.stack);
    }
    if (connection) release();
    return;
});

export default pool.query;
