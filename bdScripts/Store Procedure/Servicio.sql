-- -----------------------------------------------------------
-- Crud de la tabla Servicio
-- CREATE, DELETE, CONSULT, UPDATE

-- -----------------------------------------------------------
-- SP para insertar un servicio

DELIMITER //

CREATE PROCEDURE ServicioCreate(
    IN p_NombreServicio VARCHAR(255),
    IN p_PrecioServicio INT
)
BEGIN
    INSERT INTO Servicio (NombreServicio, PrecioServicio)
    VALUES (p_NombreServicio, p_PrecioServicio);
END //

DELIMITER ;

-- -----------------------------------------------------------
-- SP para Consultar todos los servicios o un servicio por su id

DELIMITER //

CREATE PROCEDURE ServicioConsult(
    IN p_IdServicio INT
)
BEGIN
    IF p_IdServicio = 0 THEN
        SELECT
            idservicio,
            nombreservicio,
            precioservicio
        FROM Servicio;
    ELSE
        SELECT
            idservicio,
            nombreservicio,
            precioservicio
        FROM Servicio WHERE IdServicio = p_IdServicio;
    END IF;
END //

DELIMITER ;

-- -----------------------------------------------------------
-- SP para Eliminar un servicio por su id

DELIMITER //

CREATE PROCEDURE ServicioDelete(
    IN p_IdServicio INT
)
BEGIN
    DELETE FROM Servicio WHERE IdServicio = p_IdServicio;
END //

DELIMITER ;



SELECT * FROM Servicio;
