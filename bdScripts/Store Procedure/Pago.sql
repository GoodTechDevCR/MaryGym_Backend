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

CREATE PROCEDURE PagoConsult(
    IN p_IdPago INT
)
BEGIN
    IF p_IdPago = 0 THEN
        SELECT
            IdPago,
            IdUsuario,
            Monto,
            FechaPago,
            IdTipoTran
        FROM Pago;
    ELSE
        SELECT
            IdPago,
            IdUsuario,
            Monto,
            FechaPago,
            IdTipoTran
        FROM Pago WHERE IdPago = p_IdPago;
    END IF;
END //

DELIMITER ;



DELIMITER //

CREATE PROCEDURE PagoDelete(
    IN p_IdPago INT
)
BEGIN
    DELETE FROM Pago WHERE IdPago = p_IdPago;
END //

DELIMITER ;
