export interface Proveedor{
    id?: number;
    nombre: string;
    nom_encargado: string;   
    telefono: string;
    direccion: string;

}

export interface Equipo{
    id?: number;
    nombre: string;
    serie: string;   
    modelo: string;
    marca: string;
    fabricante: string;
    ubicacion_tecnica: string;
    descripcion: string;
    observaciones: string;
}