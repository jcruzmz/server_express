import Server from "./classes/server";
import { router } from "./routes/router";
import bodyParser from "body-parser";

const server = new Server();


//Body parser se configura antes de las rutas 
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

server.app.use('/',router);

server.start(()=>{
    console.log('El servidor esta corriendo en el puerto: '+ server.port);
})