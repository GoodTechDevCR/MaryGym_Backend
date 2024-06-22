create procedure TipoTranConsult(
    #idTT  hace referencia a idTipoTransaccion
    in idTT int
)
begin
    if idTT = 0 then
        select * from tipotransaccion;
    else
        select * from tipotransaccion where IdTipoTran = idTT;
    end if;
end;
