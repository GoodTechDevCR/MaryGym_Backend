
DELIMITER //
create
    definer = marygym@`%` procedure ValidateLogin(IN usuario varchar(255), IN contrasena varchar(255),
                                                  OUT OutResulTCode int)
BEGIN
    DECLARE tempUserId INT;
    DECLARE storedPassword VARCHAR(255);

    -- Inicializar variable de salida
    SET OutResulTCode = 0;

    -- Validar si el usuario existe
    IF NOT EXISTS (SELECT 1 FROM Usuario WHERE Correo = usuario) THEN
        SET OutResulTCode = 506; -- El correo no existe
         -- Salir del procedimiento
    ELSE

        -- Obtener la contraseña almacenada
        SELECT IdUsuario, Password INTO tempUserId, storedPassword
        FROM Usuario
        WHERE Correo = usuario
        LIMIT 1;

        -- Verificar la contraseña
        IF storedPassword = contrasena THEN
            SET OutResulTCode = 1; -- Login exitoso
            SELECT tempUserId AS IdUsuario; -- Imprimir el IdUsuario encontrado
        ELSE
            SET OutResulTCode = 507; -- La contraseña es incorrecta
        END IF;
    END IF;
END; //

DELIMITER ;

