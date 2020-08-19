import { User } from "../models/user";

export const ClientsOnline: User[] = [];
export class Clients{
    public add(user:User){
        ClientsOnline.push(user);
    }

    public delete(user:User){
        var i = ClientsOnline.indexOf(user);
        if(i !== -1){
            ClientsOnline.splice(i,1);
        }
    }

    public findById(id:string){
        let cliente = ClientsOnline.find(user => user.id === id);
        return cliente;
    }

    public showAll(){
    }
}