import Server from './classes/server';
import bodyParser from "body-parser";
import cors from "cors";

const server = Server.instance;

//Body parser se configura antes de las rutas 
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//Configuración del cors
server.app.use(cors({origin:true,credentials:true}));

server.start(()=>{
    console.log('El servidor esta corriendo en el puerto: '+ server.port);
})