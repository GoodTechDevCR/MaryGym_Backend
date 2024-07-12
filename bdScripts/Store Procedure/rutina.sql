
DELIMITER //

-- sp para insertar las rutinas que se le van asignando a los usuarios
create
    definer = root@`%` procedure InsertarRutinaXUsuario(IN p_IdUsuario int, IN p_Json text)
BEGIN
    -- Insertar o actualizar la rutina del usuario
    INSERT INTO rutinaxusuario (IdUsuario, Json)
    VALUES (p_IdUsuario, p_Json)
    ON DUPLICATE KEY UPDATE Json = p_Json;
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
            Json
        FROM rutinaxusuario;
    ELSE
        SELECT
            IdUsuario,
            Json
        FROM rutinaxusuario WHERE IdUsuario = p_IdUsuario;
    END IF;
END;
 //

DELIMITER ;
