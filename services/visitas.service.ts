import { environment } from "../environments/environment";
import { getAlarmas } from "./alarmas.service";

export async function getVisitas(io:SocketIO.Server, token:string) {
    var request = require('request-json');
    var client = request.createClient(environment.URL_BACKEND);
    let tokenCompleto:string = 'Bearer '+token.toString();
    client.headers['Authorization'] = tokenCompleto;
    client.get('visitas/', function(err:any, res:any, body:any) {
      io.emit('visitas-listen',body);
    });
    getAlarmas(io,token);
  }