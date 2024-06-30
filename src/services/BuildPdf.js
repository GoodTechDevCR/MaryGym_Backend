import PDFDocument from 'pdfkit';

export const buildPDF = async (jsonData, dataCallback, endCallback) => {
    const doc = new PDFDocument();

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    // Imprime el JSON en el PDF
    doc.text("Datos del formulario:");
    doc.text(JSON.stringify(jsonData, null, 2));  // Imprime el JSON de manera legible

    doc.end();
}
