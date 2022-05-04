import { Schema } from "mongoose";
import mongoose from "mongoose";
import  {ICurso}  from "./interfaces/curso";

const DescripCurso: Schema = new Schema({
    nameCur: {type: String, required: true},
    descripCur: {type: String, required: true},
    creditos: {type: Number, required: true}
}, {
    timestamps: true
})

export default mongoose.model<ICurso>('Curso', DescripCurso);