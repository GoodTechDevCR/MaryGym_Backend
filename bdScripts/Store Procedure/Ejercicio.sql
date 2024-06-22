DELIMITER //

CREATE PROCEDURE EjercicioConsult(IN ejercicioId INT)
BEGIN
    IF ejercicioId IS NOT NULL THEN
        SELECT * FROM Ejercicio WHERE IdEjercicio = ejercicioId;
    ELSE
        SELECT * FROM Ejercicio;
    END IF;
END //

DELIMITER ;


DELIMITER //

CREATE PROCEDURE EjercicioCreate(IN nombreEjercicio VARCHAR(255), IN categoriaId INT)
BEGIN
    INSERT INTO Ejercicio (Nombre, CategoriaId) VALUES (nombreEjercicio, categoriaId);
END //

DELIMITER ;


DELIMITER //

CREATE DEFINER = `root`@`%` PROCEDURE EjercicioDelete(IN ejercicioId INT)
BEGIN
    DELETE FROM Ejercicio WHERE IdEjercicio = ejercicioId;
END //

DELIMITER ;
