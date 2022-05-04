import { NextFunction, Request, Response } from "express";
import Curso from '../models/curso';
import mongoose from "mongoose";


const getAll = async(req: Request, res: Response, next: NextFunction) => {

    const result = await Curso.find().exec();

    // TODO search for all vg and return
    return res.status(200).json({
        messagge : 'Cursos disponibles: ',
        result
    });
};

const create = async(req: Request, res: Response, next: NextFunction) => {
    const { nameCur, descripCur, creditos } = req.body;

    // TODO Validate parameters

    const curso = new Curso({
        _id : new mongoose.Types.ObjectId,
        nameCur,
        descripCur,
        creditos
       
    });

 

    const result = await curso.save();

    return res.status(201).json({
        messagge : 'Se ha registrado un nuevo curso',
        result
    });
};

const update = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { nameCur, descripCur, creditos } = req.body;

    // VALIDATE 
    const result = await Curso.findByIdAndUpdate(id, 
        { nameCur, descripCur, creditos }, { new: true});

    return res.status(200).json({
        messagge : 'Curso Actualizado',
        result
    });
};

const remove = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await Curso.findByIdAndDelete(id);
    // TODO: search for vg by id = id, delete from db
    return res.status(200).json({
        messagge : 'Curso Eliminado',
        result
    });
};

const get = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    //TODO search for vg with id = id and return

    const result = await Curso.findById(id);

    return res.status(201).json({
        messagge : 'Curso encontrado!',
        result
    });
};

export default { getAll, create, update, remove, get}