import PDFDocument from 'pdfkit-table';

export const buildPDF = async (jsonData, dataCallback, endCallback) => {
    // Inicializa el documento con márgenes específicos
    const doc = new PDFDocument({ 
        size: 'A4', 
        margin: { top: 30, right: 30, bottom: 30, left: 0 }  // El margen izquierdo se establece en 0
    });

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    // Establece los márgenes del documento
    doc.options.margins = { top: 30, right: 30, bottom: 30, left: 0 };

    // Función para configurar el contenido de la primera página
    const setupFirstPage = () => {
        // Título del PDF
        doc.fontSize(18).text("Datos de la rutina:", { underline: true });
        doc.moveDown(1); // Añade un espacio después del título

        // Imprime los datos del JSON en el PDF
        doc.fontSize(12);
        doc.text(`Nombre de Usuario: ${jsonData.usuario}`);
        doc.text(`Fecha de Inicio: ${jsonData.fechaInicio}`);
        doc.text(`Fecha de Fin: ${jsonData.fechaFin}`);
        doc.text(`Cantidad de Semanas: ${jsonData.cantSemana}`);
        doc.moveDown(3.0); // Añade un espacio de 3 líneas después de los datos del JSON
    };

    setupFirstPage();

    // Configuración de columnas
    const maxSemanas = 5;  // La cantidad máxima de semanas
    const baseColumnWidth = 60;  // Ancho base para cada columna
    const comentarioColumnWidth = 150;  // Ancho de la columna de comentarios

    // Ajuste del ancho de columnas basado en la cantidad de semanas
    const semanasWidth = Math.min(jsonData.cantSemana, maxSemanas) * baseColumnWidth;
    const tableWidth = 50 + baseColumnWidth + comentarioColumnWidth + semanasWidth;  // Total del ancho de la tabla

    // Datos de la tabla
    const headers = [
        { label: 'Nombre Ejercicio', property: 'nombreEjercicio', width: baseColumnWidth },
        { label: 'Comentario', property: 'comentario', width: comentarioColumnWidth },
        ...Array.from({ length: Math.min(jsonData.cantSemana, maxSemanas) }, (_, i) => ({
            label: `Sem ${i + 1}`,
            property: `semana${i + 1}`,
            width: baseColumnWidth,
            renderer: (value) => value || ''  // Asegura que se muestre vacío en lugar de undefined
        }))
    ];

    // Prepara los datos para la tabla
    const tableData = jsonData.funcionalidades.flatMap(funcionalidades => 
        (funcionalidades.ejercicios || []).map(ejercicio => {
            // Crea un objeto para cada fila de datos con los datos del ejercicio
            const row = {
                nombreEjercicio: ejercicio.nombreEjercicio,
                comentario: ejercicio.comentario,
            };
            // Agrega los datos de las semanas al objeto de la fila
            for (let i = 1; i <= Math.min(jsonData.cantSemana, maxSemanas); i++) {
                row[`semana${i}`] = ejercicio[`semana${i}`] || '';
            }
            return row;
        })
    );

    // Función para dibujar la tabla
    const drawTable = (title, data) => {
        // Verifica si es necesario crear una nueva página antes de dibujar la tabla
        if (doc.y + 100 > doc.page.height - doc.options.margins.bottom) {
            doc.addPage();  // Agrega una nueva página si es necesario
        }

        doc.fontSize(14).text(title, { underline: false });
        doc.moveDown(0.5);  

        // Configura y dibuja la tabla
        doc.table({
            headers,
            rows: data.map(row => [
                row.nombreEjercicio,
                row.comentario,
                ...Array.from({ length: Math.min(jsonData.cantSemana, maxSemanas) }, (_, i) => row[`semana${i + 1}`] || '')
            ]),
        }, {
            width: tableWidth,
            prepareHeader: () => doc.font('Helvetica-Bold').fontSize(10),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                doc.font('Helvetica').fontSize(8);
                indexColumn === 0 && doc.addBackground(rectRow, '#f0f0f0', 0.2);
            },
            columnSpacing: 5,
            rowHeight: 30,
            padding: 5,
            // Alinea la tabla a la derecha
            align: 'left',
            // Elimina los saltos de página innecesarios
            pageBreak: false
        }).catch(err => {
            console.error('Error generando la tabla:', err);
        });

        doc.moveDown(2);  // Añade un espacio de una línea después de la tabla
    };

    // Imprime las tablas para cada funcionalidad
    jsonData.funcionalidades.forEach((funcionalidades) => {
        // Datos de la tabla para esta funcionalidad
        const tableData = (funcionalidades.ejercicios || []).map(ejercicio => {
            // Crea un objeto para cada fila de datos con los datos del ejercicio
            const row = {
                nombreEjercicio: ejercicio.nombreEjercicio,
                comentario: ejercicio.comentario,
            };
            // Agrega los datos de las semanas al objeto de la fila
            for (let i = 1; i <= Math.min(jsonData.cantSemana, maxSemanas); i++) {
                row[`semana${i}`] = ejercicio[`semana${i}`] || '';
            }
            return row;
        });

        // Llamada a la función de tabla
        drawTable(`Rutina de ejercicios para la funcionalidad: ${funcionalidades.nombreFuncionalidad}`, tableData);
    });

    // Finaliza el documento
    doc.end();
};
