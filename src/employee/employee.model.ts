import * as mongoose from 'mongoose'

export const EmployeeSchema = new mongoose.Schema({
  employeename: { type: String, require: true },
  photo: { type: String, require: true },
  jobtitle: { type: String, require: true },
  cellphone: { type: Number, require: true },
  email: { type: String, require: true },
  department: { type: String, require: true },
});


export interface Employee {
  save();
  id:string;
  employeename: string;
  photo: string;
  jobtitle: string;
  cellphone: number;
  email: string;
  department: string;
}