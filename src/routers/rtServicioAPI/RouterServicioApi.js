import { buildPDF } from "../../services/BuildPdf.js";
import express from 'express';
const router = express.Router();

// Ruta para generar el PDF
router.post("/generarPDF", (req, res) => {
    const jsonData = req.body;
    const { usuario } = jsonData;  // Obtén el valor de usuario del JSON
    console.log("usuario usuario: ", usuario);

    // Asegúrate de que `usuario` tenga un valor válido
    if (!usuario) {
        return res.status(400).json({ error: "El campo usuario es requerido." });
    }

    // Crea una instancia de stream para la respuesta
    res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=rutina_${usuario}.pdf`,  
    });

    buildPDF(
        jsonData,
        (data) => res.write(data),
        () => res.end()
    );
});

export default router;
