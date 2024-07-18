-- Crud de la tabla Usuario
-- CREATE, DELETE, CONSULT, UPDATE
--  SP para insertar un usuario

DELIMITER //
create
    definer = marygym@`%` procedure UsuarioCreate(IN p_Nombre varchar(255), IN p_Apellido varchar(255),
                                                  IN p_Password varchar(255), IN p_Telefono varchar(255),
                                                  IN p_Correo varchar(255), IN p_Estado tinyint,
                                                  IN p_FechaNacimiento date, IN p_Comentario VARCHAR (2048),
                                                  OUT OutResulTCode int)
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
        INSERT INTO Usuario (Nombre, Apellido, Password, Telefono, Correo, Estado, FechaNacimiento, UltimoPago, Comentario, AceptacionTC)
        VALUES (p_Nombre, p_Apellido, p_Password, p_Telefono, p_Correo, p_Estado, p_FechaNacimiento, NULL, p_Comentario, 0); -- O con un valor predeterminado si es aplicable
    END IF;
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

create
    definer = root@`%` procedure UsuarioConsult(IN p_IdUsuario int)
BEGIN

    IF p_IdUsuario = 0 THEN

        SELECT

            idusuario,

            nombre,

            apellido,
            
            password,

            telefono,

            correo,

            estado,

            fechanacimiento,

            UltimoPago,

            Comentario,

            AceptacionTC

        FROM usuario;

    ELSE

        SELECT

            idusuario,

            nombre,

            apellido,
            
            password,

            telefono,

            correo,

            estado,

            fechanacimiento,

            UltimoPago,

            Comentario,

            AceptacionTC

        FROM usuario WHERE IdUsuario = p_IdUsuario;

    END IF;

END;


 //

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
