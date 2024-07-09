
DELIMITER //
CREATE DEFINER = marygym@`%` PROCEDURE UsuarioCreate(
    IN p_Nombre VARCHAR(255),
    IN p_Apellido VARCHAR(255),
    IN p_Password VARCHAR(255),
    IN p_Telefono VARCHAR(255),
    IN p_Correo VARCHAR(255),
    IN p_Estado TINYINT,
    IN p_FechaNacimiento DATE,
    OUT OutResulTCode INT
)
BEGIN
    -- Inicializar variable de salida
    SET OutResulTCode = 0;

    -- Verificar si el correo ya existe
    IF EXISTS (SELECT 1 FROM Usuario WHERE Correo = p_Correo) THEN
        SET OutResulTCode = 508; -- Ya existe un usuario registrado con ese correo
        SELECT CONCAT('Error: Ya existe un usuario registrado con el correo ', p_Correo) AS ErrorMessage;
    ELSE
        SET OutResulTCode = 1; -- No existe ningún usuario con dicho correo, por lo tanto se crea
        -- Insertar el nuevo usuario
        INSERT INTO Usuario (Nombre, Apellido, Password, Telefono, Correo, Estado, FechaNacimiento, UltimoPago)
        VALUES (p_Nombre, p_Apellido, p_Password, p_Telefono, p_Correo, p_Estado, p_FechaNacimiento, NULL); -- O con un valor predeterminado si es aplicable
    END IF;
END;
 //

DELIMITER ;

