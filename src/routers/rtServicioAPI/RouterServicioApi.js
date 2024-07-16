import { buildPDF } from "../../services/BuildPdf.js";
import express from 'express';
const router = express.Router();

// Ruta para generar el PDF
router.post("/generarPDF", (req, res) => {
    const jsonData = req.body;
    const { usuario } = jsonData;  // Obtén el valor de usuario del JSON

    // Asegúrate de que `usuario` tenga un valor válido
    if (!usuario) {
        return res.status(400).json({ error: "El campo usuario es requerido." });
    }

    // Configura la respuesta para enviar el PDF
    res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename=rutina_${usuario}.pdf`,  // "inline" para visualizar en el navegador
    });

    // Genera el PDF y lo envía al cliente
    buildPDF(
        jsonData,
        (data) => res.write(data),
        () => res.end()
    );
});

export default router;
