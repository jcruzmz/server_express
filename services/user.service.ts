export async function getUsuarios(io:SocketIO.Server, token:string) {
  var request = require('request-json');
  var client = request.createClient('http://localhost:8080/csais/');
  let tokenCompleto:string = 'Bearer '+token.toString();
  client.headers['Authorization'] = tokenCompleto;
  client.get('usuarios/', function(err:any, res:any, body:any) {
    console.log('Enviando mensaje',body);
    io.emit('usuario-nuevo',body);
  });
}