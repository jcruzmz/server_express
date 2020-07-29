import { environment } from "../environments/environment";

export async function getAlarmas(io:SocketIO.Server, token:string) {
  var request = require('request-json');
  var client = request.createClient(environment.URL_BACKEND);
  let tokenCompleto:string = 'Bearer '+token.toString();
  client.headers['Authorization'] = tokenCompleto;
  client.get('alarmas/activos', function(err:any, res:any, body:any) {
    io.emit('alarmas-listen',body);
  });
}