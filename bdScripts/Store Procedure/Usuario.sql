-- Crud de la tabla Usuario
-- CREATE, DELETE, CONSULT, UPDATE
--  SP para insertar un usuario

DELIMITER //

CREATE DEFINER = marygym@`%` PROCEDURE UsuarioCreate(
    IN p_Nombre VARCHAR(255),
    IN p_Apellido VARCHAR(255),
    IN p_Password VARCHAR(255),
    IN p_Telefono VARCHAR(255),
    IN p_Correo VARCHAR(255),
    IN p_Saldo DOUBLE,
    IN p_Estado TINYINT,
    IN p_FechaNacimiento DATE,
    OUT OutResulTCode int
)
BEGIN
    DECLARE v_UserId INT;

    -- Inicializar variable de salida
    SET OutResulTCode = 0;

    -- Verificar si el correo ya existe
    IF EXISTS (SELECT 1 FROM Usuario WHERE Correo = p_Correo) THEN
        SET OutResulTCode = 508; -- Ya existe un usuario registrado con ese correo

    ELSE
        SET OutResulTCode = 1; -- No existe ningún usuario con dicho correo, por lo tanto se crea
        -- Insertar el nuevo usuario
        INSERT INTO Usuario (Nombre, Apellido, Password, Telefono, Correo, Saldo, Estado, FechaNacimiento)
        VALUES (p_Nombre, p_Apellido, p_Password, p_Telefono, p_Correo, p_Saldo, p_Estado, p_FechaNacimiento);

        -- Obtener el ID del nuevo usuario insertado
        SELECT LAST_INSERT_ID() INTO v_UserId;
    END IF;

    -- Devolver el ID del usuario insertado (si es necesario)
    SELECT v_UserId AS IdUsuario;
END;
 //

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
DELIMITER //

CREATE PROCEDURE UsuarioByCorreo (IN correoBrindado VARCHAR(255))
BEGIN
    SELECT * FROM usuario
    WHERE Correo = correoBrindado;
END //

DELIMITER ;
