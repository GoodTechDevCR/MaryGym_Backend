CREATE  PROCEDURE CategoriaEjercicioConsult(IN idCategoria INT)
BEGIN
    IF idCategoria IS NULL THEN
        SELECT * FROM CategoriaEjercicio;
    ELSE
        SELECT * FROM CategoriaEjercicio WHERE IdCategoriaEjercicio = idCategoria;
    END IF;
END

//

CREATE DEFINER = `root`@`%` PROCEDURE CategoriaEjercicioCreate(IN NombreCatEje VARCHAR(255))
BEGIN
    INSERT INTO CategoriaEjercicio (Nombre) VALUES (NombreCatEje);
END

//

CREATE DEFINER = `root`@`%` PROCEDURE CategoriaEjercicioDelete(IN idCategoria INT)
BEGIN
    DELETE FROM CategoriaEjercicio WHERE IdCategoriaEjercicio = idCategoria;
END
