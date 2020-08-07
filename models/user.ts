export class User{
    id: string;
    username: string;
    nombre: string;
    rol: any;
    token: string;
    ip: any;
    fechaacceso: string;

    constructor(id:string,username:string,nombre:string,rol:any,token:string,ip:any){
        this.id = id;
        this.username = username;
        this.nombre = nombre;
        this.rol = rol;
        this.ip = ip;
        this.token = token;
        this.fechaacceso = Date.now().toString();
    }
}