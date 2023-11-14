const libroModel = require('../models/libroModel');

exports.obtenerTodos = async (req, res) => {
    try {
        const libros = await libroModel.find();
        res.json({ libros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
};

exports.obtenerPorId = async (req, res) => {
    try {
        const libro = await libroModel.findById(req.params.id);
        res.json({ libro });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
};

exports.crear = async (req, res) => {
    try {
        const libroNuevo = new libroModel(req.body);
        await libroNuevo.save();
        res.status(201).json({
            msg: 'Libro creado',
            id: libroNuevo._id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
};

exports.actualizar = async (req, res) => {
    try {
        await libroModel.findByIdAndUpdate(req.params.id, req.body);
        res.json({ msg: 'Libro actualizado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
};

exports.eliminar = async (req, res) => {
    try {
        await libroModel.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Libro eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
};
