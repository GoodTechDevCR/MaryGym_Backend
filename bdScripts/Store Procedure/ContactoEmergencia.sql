DELIMITER //

CREATE PROCEDURE ContactoEmergenciaCreate(
    IN p_IdUsuario INT,
    IN p_Nombre NVARCHAR(255),
    IN p_NumeroTelefono NVARCHAR(255),
    IN p_Relacion NVARCHAR(64)
)
BEGIN
    INSERT INTO ContactoEmergencia (IdUsuario, Nombre, NumeroTelefono, Relacion)
    VALUES (p_IdUsuario, p_Nombre, p_NumeroTelefono, p_Relacion);
END //

DELIMITER ;



DELIMITER //

CREATE PROCEDURE ContactoEmergenciaConsult(
    IN p_IdUsuario INT
)
BEGIN
    IF p_IdUsuario = 0 THEN
        SELECT
            IdContEmer,
            IdUsuario,
            Nombre,
            NumeroTelefono,
            Relacion
        FROM ContactoEmergencia;
    ELSE
        SELECT
            IdContEmer,
            IdUsuario,
            Nombre,
            NumeroTelefono,
            Relacion
        FROM ContactoEmergencia WHERE IdUsuario = p_IdUsuario;
    END IF;
END //

DELIMITER ;



DELIMITER //

CREATE PROCEDURE ContactoEmergenciaDelete(
    IN p_IdContEmer INT
)
BEGIN
    DELETE FROM ContactoEmergencia WHERE IdContEmer = p_IdContEmer;
END //

DELIMITER ;
