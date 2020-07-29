export class User{
    id: string;
    username: string;
    nombre: string;
    rol: any;
    token: string;
    fechaacceso: string;

    constructor(id:string,username:string,nombre:string,rol:any,token:string){
        this.id = id;
        this.username = username;
        this.nombre = nombre;
        this.rol = rol;
        this.token = token;
        this.fechaacceso = Date.now().toString();
    }
}