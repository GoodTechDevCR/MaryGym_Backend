-- Crud de la tabla Usuario
-- CREATE, DELETE, CONSULT, UPDATE
--  SP para insertar un usuario

DELIMITER //

CREATE PROCEDURE UsuarioCreate(
IN p_Nombre VARCHAR(255),
IN p_Apellido VARCHAR(255),
IN p_Password VARCHAR(255),
IN p_Telefono VARCHAR(255),
IN p_Correo VARCHAR(255),
IN p_Saldo DOUBLE,
IN p_Estado TINYINT,
IN p_FechaNacimiento DATE
)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
BEGIN
    GET DIAGNOSTICS CONDITION 1 @sqlstate = RETURNED_SQLSTATE, @errno = MYSQL_ERRNO, @text = MESSAGE_TEXT;
    SELECT CONCAT('Error: ', @errno, ' - ', @text) AS ErrorMessage;
END;
INSERT INTO Usuario (Nombre, Apellido, Password, Telefono, Correo, Saldo, Estado, FechaNacimiento)
VALUES (p_Nombre, p_Apellido, p_Password, p_Telefono, p_Correo, p_Saldo, p_Estado, p_FechaNacimiento);
END //

DELIMITER ;


-- -------------------------------------------------------------------------------------------
-- SP para Cambiar el estado de un usuario por su id

DELIMITER //

CREATE PROCEDURE UsuarioChangeEstado(
    IN p_IdUsuario INT,
    IN p_Estado TINYINT
)
BEGIN
    UPDATE Usuario SET Estado = p_Estado WHERE IdUsuario = p_IdUsuario;
END //

DELIMITER ;


-- -----------------------------------------------------------
-- SP para consultar todos los usuarios o un usuario por su id

DELIMITER //

CREATE PROCEDURE UsuarioConsult(
    IN p_IdUsuario INT
)
BEGIN
    IF p_IdUsuario = 0 THEN
        SELECT
            idusuario,
            nombre,
            apellido,
            nombreusuario,
            telefono,
            correo,
            saldo,
            estado,
            fechanacimiento
        FROM Usuario;
    ELSE
        SELECT
            idusuario,
            nombre,
            apellido,
            nombreusuario,
            telefono,
            correo,
            saldo,
            estado,
            fechanacimiento
        FROM Usuario WHERE IdUsuario = p_IdUsuario;
    END IF;
END //

DELIMITER ;

-- -----------------------------------------------------------
-- SP para Eliminar un usuario por su id

DELIMITER //

CREATE PROCEDURE UsuarioDelete(
    IN p_IdUsuario INT
)
BEGIN
    DELETE FROM Usuario WHERE IdUsuario = p_IdUsuario;
END //

DELIMITER ;

--------------------------------------------------------------
