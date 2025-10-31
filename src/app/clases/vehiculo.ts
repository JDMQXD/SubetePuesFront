import { Ciudad } from "./ciudad";
import { Transmision } from "./transmision";
import { Propietario } from "./propietario";
import { TipoVehiculo } from "./tipoVehiculo";
import { Disponibilidad } from "./disponibilidad";

export class Vehiculo {
    idVehiculo: string = '';
    transmision: Transmision = new Transmision();
    ciudad: Ciudad = new Ciudad();
    propietario: Propietario = new Propietario();
    tipoVehiculo: TipoVehiculo = new TipoVehiculo();
    disponibilidad: Disponibilidad = new Disponibilidad();
    modelo: string = '';
    marca: string = '';
    espeficicacion: string = '';
    estadoDeCuenta: string = '';
    fechaRegistro: Date = new Date();
}