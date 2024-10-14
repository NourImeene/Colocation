import { Document } from "mongoose";
export interface Iuser extends Document{
    readonly name:string
    readonly email:string
    password:string//nahina readonly wa9telli jina bch naamlou update , khatr bch nbadlouha 
    readonly phone:number
    readonly ville:string
}