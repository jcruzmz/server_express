import express from 'express';
import socketIO from 'socket.io';
import http  from 'http';
import * as socket from '../sockets/sockets';
import { environment } from '../environments/environment';

export default class Server {
    private static _instance:Server;
    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;
    private constructor() {
        this.app = express();
        this.port = environment.SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.escucharSockets();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    private escucharSockets(){
        this.io.on('connection',cliente=>{
            console.log("cliente conectado",cliente.id);
            socket.reconection(cliente,this.io);
            socket.login(cliente,this.io);
            socket.logout(cliente);
            socket.desconectar(cliente);
            socket.usuarios(cliente,this.io);
            socket.visitas(cliente,this.io);
            socket.alarmas(cliente,this.io);
        });
    }

    start(callback: any) {
        this.httpServer.listen(this.port, callback);
    }
}