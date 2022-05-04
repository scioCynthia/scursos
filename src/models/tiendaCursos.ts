import { Schema } from "mongoose";
import mongoose from "mongoose";
import { ICurso } from "./interfaces/curso";



const alumnos = new Schema({
    name_alumnos: {type: String, required: true}
})


const DesCursos: Schema = new Schema({
    nameCur: {type: String, required: true},
    descripCur: {type: String, required: true},
    creditos: {type: Number, required: true},
    num_alumnos: {type: [alumnos], required: true}
}, {
    timestamps: true
})

export default mongoose.model<ICurso>('Curso', DesCursos);

