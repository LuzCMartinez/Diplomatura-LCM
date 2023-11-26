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
async function deleteConsultasById(id){
    var query = "delete from consultas where id = ?";
    var rows = await pool.query(query,[id]);
    return rows;
}
async function getConsultasById (id){
    var query = "select * from consultas where id = ?";
    var rows = await pool.query (query, [id]);
    return rows [0];
}
async function modificarConsultasById(obj,id){
    try{
        var query = "update consultas set ? where id =?";
        var rows = await pool.query (query,[obj,id]);
        return rows; 
    }catch (error){
        throw error;
    }
}
module.exports ={getConsultas,insertConsulta, deleteConsultasById, getConsultasById, modificarConsultasById}
