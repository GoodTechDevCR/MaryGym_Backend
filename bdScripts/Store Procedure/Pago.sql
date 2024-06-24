DELIMITER //

CREATE PROCEDURE PagoCreate(
    IN p_IdUsuario INT,
    IN p_Monto FLOAT,
    IN p_FechaPago DATE,
    IN p_IdTipoTran INT
)
BEGIN
    INSERT INTO Pago (IdUsuario, Monto, FechaPago, IdTipoTran)
    VALUES (p_IdUsuario, p_Monto, p_FechaPago, p_IdTipoTran);
END //

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
