var pool = require ('./bd');

async function getConsultas(){
    var query ='select * from consultas';
    var rows = await pool.query(query);
    return rows;
}
module.exports ={getConsultas}