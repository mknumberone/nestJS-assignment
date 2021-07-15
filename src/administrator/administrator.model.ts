import * as mongoose from 'mongoose'
import { UpdateAdminRespone } from './dto/administrator.dto'

export const AdministratorSchema = new mongoose.Schema({
    username:{type: String, require: true},
    password:{type: String, require: true},
    email:{type: String, require: true},
    role:{type: String, require: true},
    state: {type: Boolean, require: true}
})

export interface Administrator {
    updateOne(updateAdmin: UpdateAdminRespone): import("./dto/administrator.dto").AdminResponeDto | PromiseLike<import("./dto/administrator.dto").AdminResponeDto>
    length: number;
    save()
    id: string;
    username: string;
    password: string;
    email:string;
    role:string;
    state: boolean;
}

