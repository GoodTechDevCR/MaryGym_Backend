DELIMITER //

CREATE DEFINER = `marygym`@`%` PROCEDURE EjercicioConsult(IN ejercicioId INT)
BEGIN
    IF ejercicioId = 0 THEN
        SELECT * FROM Ejercicio
        ORDER BY Nombre;  -- Ordenar alfabéticamente de la A a la Z
    ELSE
        SELECT * FROM Ejercicio
        WHERE IdEjercicio = ejercicioId;
    END IF;
END;
DELIMITER ;

DELIMITER //
create
    definer = marygym@`%` procedure EjercicioConsultByCat(IN catId int)
BEGIN
    IF catId =0  THEN
        SELECT * FROM Ejercicio;
    ELSE
        SELECT * FROM Ejercicio WHERE CategoriaId = catId;
    END IF;
END;
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
