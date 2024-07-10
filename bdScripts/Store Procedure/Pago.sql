DELIMITER //

CREATE PROCEDURE PagoCreate(
    IN p_IdUsuario INT,
    IN p_Monto FLOAT,
    IN p_FechaPago DATE,
    IN p_IdTipoTran INT
)
BEGIN
    DECLARE total_pagos FLOAT;

    -- Insertar el pago
    INSERT INTO Pago (IdUsuario, Monto, FechaPago, IdTipoTran)
    VALUES (p_IdUsuario, p_Monto, p_FechaPago, p_IdTipoTran);

    -- Calcular la suma de todos los pagos del usuario
    SELECT SUM(Monto) INTO total_pagos
    FROM Pago
    WHERE IdUsuario = p_IdUsuario;

    -- Actualizar el saldo del usuario
    UPDATE Usuario
    SET Saldo = total_pagos
    WHERE IdUsuario = p_IdUsuario;
END
 //

DELIMITER ;



DELIMITER //

create procedure PagoConsult(IN p_IdPago int)
BEGIN
    IF p_IdPago = 0 THEN
        SELECT
            IdPago,
            Pago.IdUsuario,
            CONCAT(u.Nombre, ' ' ,u.Apellido) as NombreUsuario,
            Monto,
            FechaPago,
            Pago.IdTipoTran,
            tt.TipoTran
        FROM Pago
        inner join tipotransaccion tt on Pago.IdTipoTran = tt.IdTipoTran
        inner join usuario u on Pago.IdUsuario = u.IdUsuario;
    ELSE
        SELECT
            IdPago,
            Pago.IdUsuario,
            CONCAT(u.Nombre, ' ' ,u.Apellido) as NombreUsuario,
            Monto,
            FechaPago,
            Pago.IdTipoTran,
            tt.TipoTran
        FROM Pago
        inner join tipotransaccion tt on Pago.IdTipoTran = tt.IdTipoTran
        inner join usuario u on Pago.IdUsuario = u.IdUsuario
        WHERE IdPago = p_IdPago;
    END IF;
END; //

DELIMITER ;



DELIMITER //

CREATE PROCEDURE PagoDelete(
    IN p_IdPago INT
)
BEGIN
    DELETE FROM Pago WHERE IdPago = p_IdPago;
END //

DELIMITER ;

DELIMITER //
create
    definer = root@`%` procedure PagoByIdConsult(IN p_IdPago int)
BEGIN

    IF p_IdPago = 0 THEN

        SELECT

            IdPago,

            pago.IdUsuario,

            CONCAT(u.Nombre, ' ' ,u.Apellido) as NombreUsuario,

            pago.Monto,

            FechaPago,

            pago.IdTipoTran,

            tt.TipoTran

        FROM pago

        INNER JOIN tipotransaccion tt ON pago.IdTipoTran = tt.IdTipoTran

        INNER JOIN usuario u ON pago.IdUsuario = u.IdUsuario;

    ELSE

        SELECT

            IdPago,

            pago.IdUsuario,

            CONCAT(u.Nombre, ' ' ,u.Apellido) as NombreUsuario,

            pago.Monto,

            FechaPago,

            pago.IdTipoTran,

            tt.TipoTran

        FROM pago

        INNER JOIN tipotransaccion tt ON pago.IdTipoTran = tt.IdTipoTran

        INNER JOIN usuario u ON pago.IdUsuario = u.IdUsuario

        WHERE pago.IdPago = p_IdPago;

    END IF;

END;//

DELIMITER ;

