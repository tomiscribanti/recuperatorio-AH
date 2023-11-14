const autorModel = require('../models/autorModel');

exports.obtenerTodos = async (req, res) => {
    try {
        const autores = await autorModel.find();
        res.json({ autores });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
};

exports.obtenerPorId = async (req, res) => {
    try {
        const autor = await autorModel.findById(req.params.id);
        res.json({ autor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
};

exports.crear = async (req, res) => {
    try {
        const data = req.body;
        const autorNew = new autorModel(data);
        await autorNew.save();
        res.status(201).json({
            msg: 'Autor creado',
            id: autorNew._id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
};

exports.actualizar = async (req, res) => {
    try {
        await autorModel.findByIdAndUpdate(req.params.id, req.body);
        res.json({ msg: 'Autor actualizado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
};

exports.eliminar = async (req, res) => {
    try {
        await autorModel.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Autor eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
};
