import { ciudad } from "./ciudad";
import { transmision } from "./transmision";
import { propietario } from "./propietario";
import { tipoVehiculo } from "./tipoVehiculo";
import { disponibilidad } from "./disponibilidad";

export class vehiculo{
    idVehiculo: string = '';
    transmision: transmision = new transmision;
    ciudad: ciudad = new ciudad;
    propietario: propietario = new propietario;
    tipoVehiculo: tipoVehiculo = new tipoVehiculo;
    disponibilidad: disponibilidad = new disponibilidad;
    modelo: string = '';
    marca: string = '';
    espeficicacion: string = '';
    estadoDeCuenta: string = '';
    fechaRegistro: Date = new Date;
}