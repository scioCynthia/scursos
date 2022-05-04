import { Document } from 'mongoose';

export interface ICurso extends Document{
    nameCur: string,
    descripCur: string,
    creditos: number,
    numAlumnos: number
}


