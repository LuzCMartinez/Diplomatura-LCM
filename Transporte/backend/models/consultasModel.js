var pool = require ('./bd');

async function getConsultas(){
    var query ='select * from consultas';
    var rows = await pool.query(query);
    return rows;
}
async function insertConsulta (obj){
    try{
        var query ="insert into consultas set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    }catch (error){
        console.log (error);
        throw error;
    }
}
module.exports ={getConsultas,insertConsulta }