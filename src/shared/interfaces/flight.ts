import { Journey } from './journey';

export class Flight {
    id: number;
    nombre: string;
    salida: Date;
    llegada: Date;
    estado: string;
    numAsientos: number;
    precioBaseVip: number;
    precioBaseTurista: number;
    trayecto: Journey;
}
