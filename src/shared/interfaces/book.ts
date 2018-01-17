import { Flight } from './flight';

export class Book {
    id: number;
    pasajero: {
        email: string,
        nombre: string,
        fechaNac: string,
        dni: string
    };
    vuelo: Flight;
}
