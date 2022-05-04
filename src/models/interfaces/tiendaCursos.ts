import { Document } from 'mongoose';

export default interface ITiCurso extends Document{
    nameCur: string,
    descripCur: string,
    creditos: Number,
    num_alumnos:{
        name_alumnos: string,
    },
}
