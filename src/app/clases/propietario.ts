import { tipoDocumento } from "./documento";


export class propietario{
    idpropietario: string = '';
    nombre: string = '';
    tipoDocumento: tipoDocumento = new tipoDocumento;
    documento: string = '';
    telefono: string = '';
    correo: string = '';
    direccion: string = '';
    usuario: string = '';
    password: string = '';
    fechaRegistro: Date = new Date()

}