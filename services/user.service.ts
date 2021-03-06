import { environment } from "../environments/environment";

export async function getUsuarios(io:SocketIO.Server, token:string) {
  var request = require('request-json');
  var client = request.createClient(environment.URL_BACKEND);
  let tokenCompleto:string = 'Bearer '+token.toString();
  client.headers['Authorization'] = tokenCompleto;
  client.get('usuarios/', function(err:any, res:any, body:any) {
    io.emit('usuario-listen',body);
  });
}