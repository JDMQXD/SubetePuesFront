import { TipoDocumento } from "./documento";

export class Propietario {
    // Renombrado a idPropietario para consistencia
    idPropietario: string = '';
    nombre: string = '';
    tipoDocumento: TipoDocumento = new TipoDocumento();
    documento: string = '';
    telefono: string = '';
    correo: string = '';
    direccion: string = '';
    usuario: string = '';
    password: string = '';
    fechaRegistro: Date = new Date();
}