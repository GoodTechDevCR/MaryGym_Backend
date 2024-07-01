CREATE PROCEDURE UpdateAnything(
    IN nombreTabla VARCHAR(255),
    IN idRegistro INT,
    IN nombreColumna VARCHAR(255),
    IN nuevoValor VARCHAR(255)
)
BEGIN
    DECLARE columnaId VARCHAR(255);

    -- Determinar el nombre de la columna de ID según la tabla
    CASE nombreTabla
        WHEN 'Usuario' THEN SET columnaId = 'IdUsuario';
        WHEN 'CategoriaEjercicio' THEN SET columnaId = 'IdCategoriaEjercicio';
        WHEN 'Ejercicio' THEN SET columnaId = 'IdEjercicio';
        WHEN 'Servicio' THEN SET columnaId = 'IdServicio';
        WHEN 'Cobro' THEN SET columnaId = 'IdCobro';
        WHEN 'Pago' THEN SET columnaId = 'IdPago';
        when 'ContactoEmergencia' then set columnaId = 'IdContEmer';
        ELSE SET columnaId = NULL; -- Para manejar casos no esperados
    END CASE;

    -- Verificar si se encontró la columna de ID para la tabla dada
    IF columnaId IS NOT NULL THEN
        SET @sql = CONCAT('UPDATE ', nombreTabla, ' SET ', nombreColumna, ' = ? WHERE ', columnaId, ' = ?');
        PREPARE stmt FROM @sql;
        SET @nuevoValor = nuevoValor;
        SET @idRegistro = idRegistro;
        EXECUTE stmt USING @nuevoValor, @idRegistro;
        DEALLOCATE PREPARE stmt;
    ELSE
        -- Manejar caso no esperado (tabla desconocida)
        SELECT 'Tabla desconocida' AS Resultado;
    END IF;
END
