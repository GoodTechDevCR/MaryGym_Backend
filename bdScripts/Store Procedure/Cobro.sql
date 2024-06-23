-- Crud de la tabla Cobro
-- CREATE, DELETE, CONSULT, UPDATE

-- SP para insertar un cobro

DELIMITER //

CREATE PROCEDURE CobroCreate(
    IN p_IdServicio INT,
    IN p_IdUsuario INT,
    IN p_MontoCobro DOUBLE,
    IN p_FechaInicio DATE,
    IN p_FechaFinal DATE
)
BEGIN
    INSERT INTO Cobro (IdServicio, IdUsuario, MontoCobro, FechaInicio, FechaFinal)
    VALUES (p_IdServicio, p_IdUsuario, p_MontoCobro, p_FechaInicio, p_FechaFinal);
END //

DELIMITER ;

-- -----------------------------------------------------------
-- SP para Consultar todos los cobros o un cobro por su id

DELIMITER //

CREATE PROCEDURE CobroConsult(
    IN p_IdCobro INT
)
BEGIN
    IF p_IdCobro = 0 THEN
        SELECT
            idcobro,
            idservicio,
            idusuario,
            montocobro,
            fechainicio,
            fechafinal
        FROM Cobro;
    ELSE
        SELECT
            idcobro,
            idservicio,
            idusuario,
            montocobro,
            fechainicio,
            fechafinal
        FROM Cobro WHERE IdCobro = p_IdCobro;
    END IF;
END //

DELIMITER ;

-- -----------------------------------------------------------
-- SP para Eliminar un cobro por su id

DELIMITER //

CREATE PROCEDURE CobroDelete(
    IN p_IdCobro INT
)
BEGIN
    DELETE FROM Cobro WHERE IdCobro = p_IdCobro;
END //

DELIMITER ;
