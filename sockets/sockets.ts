import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import http  from 'http';
import { getUsuarios } from '../services/user.service';
import { getVisitas } from '../services/visitas.service';
//Logica de los sockets

//Escuchar desconección
export const desconectar = (cliente:Socket)=>{
    cliente.on('disconnect',()=>{

    })
}
//Escuchar mensajes
export const altaUsuario = (cliente: Socket, io:socketIO.Server)=>{
    cliente.on('alta-usuario',(payload:{mensaje:string})=>{
        console.log('Mensaje recibido',payload);
        getUsuarios(io,payload.mensaje);
    })
}

export const visita = (cliente: Socket, io:socketIO.Server)=>{
    cliente.on('visitas',(payload:{token:string})=>{
        console.log('Mensaje recibido',payload);
        getVisitas(io,payload.token);
    })
}
