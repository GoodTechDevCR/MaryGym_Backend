
DELIMITER //

-- sp para insertar las rutinas que se le van asignando a los usuarios
CREATE DEFINER = marygym@`%` PROCEDURE InsertarRutinaXUsuario(
    IN p_IdUsuario INT,
    IN p_IdRutina INT,
    IN p_Json TEXT
)
BEGIN
    -- Insertar una nueva rutina para el usuario
    INSERT INTO rutinaXusuario (IdUsuario, IdRutina, Json)
    VALUES (p_IdUsuario, p_IdRutina, p_Json);
END;
 //

DELIMITER ;

DELIMITER //
create
    definer = marygym@`%` procedure RutinaXUsuarioConsult(IN p_IdUsuario int)
BEGIN
    IF p_IdUsuario = 0 THEN
        SELECT
            IdUsuario,
            IdRutina,
            Json
        FROM rutinaxusuario;
    ELSE
        SELECT
            IdUsuario,
            IdRutina,
            Json
        FROM rutinaxusuario WHERE IdUsuario = p_IdUsuario;
    END IF;
END;
 //

DELIMITER ;
