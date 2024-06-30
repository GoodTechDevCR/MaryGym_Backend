import { buildPDF } from "../../services/BuildPdf.js";

import express from 'express';
const router = express.Router();

// Router para la creación de un PDF
router.post("/generarPDF", (req, res) => {
    const jsonData = req.body;

    const stream = res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=prueba.pdf",
    });

    buildPDF(
        jsonData,
        (data) => stream.write(data),
        () => stream.end()
    );
});

export default router;
