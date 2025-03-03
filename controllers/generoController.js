const GeneroService = require('../services/generoService');

class GeneroController {
    // Crear un nuevo género
    static async crearGenero(req, res) {
        const { nombre } = req.body;
        try {
            const genero = await GeneroService.crearGenero(nombre);
            res.status(201).json(genero);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Obtener todos los géneros
    static async obtenerGeneros(req, res) {
        try {
            const generos = await GeneroService.obtenerGeneros();
            res.status(200).json(generos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Obtener un género por ID
    static async obtenerGeneroPorId(req, res) {
        const { id } = req.params;
        try {
            const genero = await GeneroService.obtenerGeneroPorId(id);
            if (genero) {
                res.status(200).json(genero);
            } else {
                res.status(404).json({ error: 'Género no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Actualizar un género por ID
    static async actualizarGenero(req, res) {
        const { id } = req.params;
        const { nombre } = req.body;
        try {
            const generoActualizado = await GeneroService.actualizarGenero(id, nombre);
            if (generoActualizado) {
                res.status(200).json(generoActualizado);
            } else {
                res.status(404).json({ error: 'Género no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Eliminar un género por ID
    static async eliminarGenero(req, res) {
        const { id } = req.params;
        try {
            const generoEliminado = await GeneroService.eliminarGenero(id);
            if (generoEliminado) {
                res.status(200).json({ message: 'Género eliminado correctamente' });
            } else {
                res.status(404).json({ error: 'Género no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = GeneroController;