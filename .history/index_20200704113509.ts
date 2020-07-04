import Server from "./classes/server";
import { router } from "./routes/router";
import bodyParser from "body-parser";

const server = new Server();

server.app.use('/',router);

server.start(()=>{
    console.log('El servidor esta corriendo en el puerto: '+ server.port);
})