import { Router, Request, Response, request } from 'express'

export const router = Router();
const oracledb = require('oracledb');
const config = {
  user: 'CSAIS',
  password: 'CSAISDB',
  connectString: '10.191.106.193:1521/dragonfly'
};

const lowercaseKeys = require('lowercase-keys');
router.get('/mensajes', (req: Request, res: Response) => {
  // var mysql = require('mysql');
  // var connection = mysql.createConnection({
  //     host: 'localhost',
  //     user: 'root',
  //     password: 'Mimosael17',
  //     database: 'sipi'
  // });
  // connection.connect();
  // var data:{userName:string,name:string} [] = [];
  // connection.query('SELECT * FROM sipi.user', function (err:any, rows:any [], fields:any) {
  //     if (err) throw err;
  //     console.log(rows);
  //     res.json({
  //         ok: true,
  //         mensaje: rows
  //     });
  // });
  // connection.end();
  // getEmployee(1, res);
  // var request = require('request');
  // request({
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJFWDQ1Mjk4MyIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJhcGVsbGlkbyI6IkNydXoiLCJpZCI6MjA0LCJleHAiOjE1OTUwNDcyMTEsIkluZm8gYWRpY2lvbmFsIjoiSG9sYSBxdWUgdGFsITogRVg0NTI5ODMiLCJub21icmUiOiJKdWFuIERpZWdvIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJqdGkiOiJjMjg0YzUzMS05MGUzLTQ3ZmYtODFkZS02ODgwYzczYTQxZjAiLCJlbWFpbCI6Imp1YW4uY3J1ekBtYWlsLnRlbGNlbC5jb20iLCJjbGllbnRfaWQiOiJhbmd1bGFyYXBwIn0.IcWgQUdHj0uIKMzfGuZYwP31lHjBhwf9Vp_WH86OeJ6M_1S5ia_qlhHpZx0tXUDFZwWvB7ovIoy7TATVAvYQBIKV4HVVCIOVOO5bgCeuoeokh8P-XyuqNS2g1DaDzOycwoW-dqwvLKRn8Wf6WqY8FqMIEIpVTZCY4TSHpbG982b0BTnIzu_tnbN2OhQZCh00_fQVEsf7uWdrNX8wnVXc3k6YqAjM_mOBwNscxbs3oCl2uNixxwl3Z8zkSbsdwbrrDYRRcFirXiQX1siQBNH6OQRI9_6fPPzNa4GVeSXdcjq0q6UOgnrbuZ33CyI_tfeImo_0yvO6WpBysZX6embJbQ'
  //   },
  //   uri: 'http://localhost:8080/csais/usuarios',
  //   method: 'GET'
  // }, function (err:any, res:any, body:Usuario []) {
  //   if(err){
  //     return null;
  //   }else{
  //     console.log(body[0]);
  //   }
  // });
  var request = require('request-json');
  const arr = Array(1,2,3)
  var client = request.createClient('http://localhost:8080/csais/');
  client.headers['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJFWDQ1Mjk4MyIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJhcGVsbGlkbyI6IkNydXoiLCJpZCI6MjA0LCJleHAiOjE1OTUwNTgxODMsIkluZm8gYWRpY2lvbmFsIjoiSG9sYSBxdWUgdGFsITogRVg0NTI5ODMiLCJub21icmUiOiJKdWFuIERpZWdvIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJqdGkiOiJmZjRhYzJlMC1hOWNlLTQ2YmEtODEzNy1jZWQ5NDM5M2RjNzMiLCJlbWFpbCI6Imp1YW4uY3J1ekBtYWlsLnRlbGNlbC5jb20iLCJjbGllbnRfaWQiOiJhbmd1bGFyYXBwIn0.0Aa0zhmSVYv5Wg48ROI8I8F6hRNmebPHbXeXDPlPT5kSNr6yqK8MaETWWUy35Qa8oyaopWwiAIZmuWyHaKM2GxoY7LjMwKufA3DKjS2h9MrITkNle3311NLMrVFfhPmUJZ2UQIR69QB2zrc1JekNlvHJFSqOYmrIS0cK_lPBxJQQg35exk4pJ4az7EPiNFiHIz7m4yWumtGhDcqv9YoKnOVFmm24VXx5dC4MLmnY80IZJtycagsHTsf636ZQi_MNU6onvjiH5-3ybURfiyO27i2GgogjVcDBxjag0ZWYIMh7Wi0RurGent5UIhrqnWV-zQ_8cRokinvaVVybVk8JyA';
  client.get(`visitas/${arr}/page/0`, function(err:any, res:any, body:any) {
    return console.log(body);
  });
})


// async function getEmployee(empId: number, res: Response) {
//   let conn
//   try {
//     conn = await oracledb.getConnection(config)
//     const result = await conn.execute('SELECT * FROM TUSUARIO', [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
//     let usuarios: Usuario[] = result.rows;
//     res.json(usuarios);
//   } catch (err) {
//     console.log('Ouch!', err)
//   } finally {
//     if (conn) { // conn assignment worked, need to close
//       await conn.close()
//     }
//   }
// }


router.post('/mensajes', (req: Request, res: Response) => {
  const cuerpo = req.body.cuerpo;
  const de = req.body.de;


  res.json({
    ok: true,
    mensaje: cuerpo,
    de: de
  });
})

router.post('/mensajes/:id', (req: Request, res: Response) => {
  const cuerpo = req.body.cuerpo;
  const de = req.body.de;
  const id = req.params.id;
  res.json({
    ok: true,
    mensaje: cuerpo,
    de: de,
    id: id
  });
})