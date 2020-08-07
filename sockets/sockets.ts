import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { getUsuarios } from '../services/user.service';
import { getVisitas } from '../services/visitas.service';
import { User } from '../models/user';
import { Clients } from '../classes/clients';
import { getAlarmas } from '../services/alarmas.service';
//Logica de los sockets

//Instancia para la clase de clientes
export const clientesConectados = new Clients();

//Escuchar desconección
export const desconectar = (cliente:Socket)=>{
    cliente.on('disconnect',()=>{
        console.log('cliente desconectado', cliente.id);
        let user = clientesConectados.findById(cliente.id);
        user !== undefined ? clientesConectados.delete(user):null;
        clientesConectados.showAll();
    })
}

export const login = (cliente:Socket,io:socketIO.Server)=>{
    cliente.on('login',(payload:{user:any,token:string})=>{
        console.log(cliente);
        let usuario = new User(cliente.id,payload.user.username,payload.user.nombre,payload.user.roles,payload.token,cliente.handshake.address);
        clientesConectados.add(usuario);
        clientesConectados.showAll();
    })
}

export const logout = (cliente:Socket)=>{
    cliente.on('logout',()=>{
        let user = clientesConectados.findById(cliente.id);
        user !== undefined ? clientesConectados.delete(user):null;
        clientesConectados.showAll();
    })
}

export const reconection = (cliente:Socket,io:socketIO.Server)=>{
    cliente.on('reconect',(payload:{user:any,token:string})=>{
        let usuario = new User(cliente.id,payload.user.username,payload.user.nombre,payload.user.roles,payload.token,cliente.handshake.address);
        clientesConectados.add(usuario);
        clientesConectados.showAll();
    })
}

//Escuchar mensajes
export const usuarios = (cliente: Socket, io:socketIO.Server)=>{
    cliente.on('usuario-emit',()=>{
        let user = clientesConectados.findById(cliente.id);
        user !== undefined ? getUsuarios(io,user.token):null;
    })
}

export const visitas = (cliente: Socket, io:socketIO.Server)=>{
    cliente.on('visitas-emit',()=>{
        let user = clientesConectados.findById(cliente.id);
        user !== undefined ? getVisitas(io,user.token):null;
    })
}

export const alarmas = (cliente: Socket, io:socketIO.Server)=>{
    cliente.on('alarmas-emit',()=>{
        let user = clientesConectados.findById(cliente.id);
        user !== undefined ? getAlarmas(io,user.token):null;
    })
}