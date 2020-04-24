export interface Turno {
    $key: string;
    key_paciente: string;
    nombre_paciente: string;
    apellido_paciente: string;
    //key_profesional: string;
    nombre_profesional: string;
    apellido_profesional: string;
    fecha: Date;
    especialidad: string;
    ingreso: boolean
}
