import {UserInterface} from '../interfaces/user-interface';

export class User implements UserInterface {
    id:         number;
    name:       string;
    lastname:   string;
    email:      string;
    fiscalCode: string;
    province:   string;
    phone:      number;

    constructor(){
        this.id =         0;
        this.name =       '';
        this.lastname =   '';
        this.email =      '';
        this.fiscalCode = '';
        this.province =   '';
        this.phone =      0;
    }
}