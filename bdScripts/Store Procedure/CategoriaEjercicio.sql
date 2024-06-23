
CREATE  PROCEDURE CategoriaEjercicioConsult(IN idCategoria INT)
BEGIN
    IF idCategoria = 0 THEN
        SELECT * FROM CategoriaEjercicio;
    ELSE
        SELECT * FROM CategoriaEjercicio WHERE IdCategoriaEjercicio = idCategoria;
    END IF;
END

//

create procedure CategoriaEjercicioCreate(IN NombreCatEje varchar(255))
BEGIN
    INSERT INTO CategoriaEjercicio (Nombre) VALUES (NombreCatEje);
END;

//

create procedure CategoriaEjercicioDelete(IN idCategoria int)
BEGIN
    DELETE FROM CategoriaEjercicio WHERE IdCategoriaEjercicio = idCategoria;
END;

